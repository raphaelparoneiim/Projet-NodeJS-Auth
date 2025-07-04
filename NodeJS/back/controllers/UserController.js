import { PrismaClient } from "@prisma/client"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

const getUser = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
            const user = await prisma.user.findUnique({
                where: {
                    id: decoded.id
                }
            }).then(data => {
                res.send(data);
            })
            .catch(error => {
                res.send(error);
            })
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export {getUser}