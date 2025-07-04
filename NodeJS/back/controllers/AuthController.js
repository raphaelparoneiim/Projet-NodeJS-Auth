import { PrismaClient } from '@prisma/client';
import bcrypt  from 'bcrypt';
const prisma = new PrismaClient();
import jwt from 'jsonwebtoken';


const signUp = async (req, res) => {
    const { email, pseudo, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    prisma.user
        .create({
            data: {
                email,
                pseudo,
                password: hashedPassword,
            },
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
}
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user
        .findUnique({
            where: {
                email,
            },
        })
        .then((data) => {
            if (!data) {
                res.status(400).json({ message: 'No user found' });
            }
            const valid = bcrypt.compare(password, data.password);
            if (!valid) {
                res.status(400).json({ message: 'Invalid password' });
            }
            const token = jwt.sign({id: data.id, email: data.email}, process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            })
            res.send({token: token});

        })
        .catch((error) => {
            res.status(400).json(error);
        });
}
export {signUp, login};