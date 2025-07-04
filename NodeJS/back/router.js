import express from 'express'
import agentRoutes from './routes/AgentRoutes.js'
import authRoutes from './routes/AuthRoutes.js'
import userRoutes from './routes/UserRoutes.js'

const router = express.Router();

router.use("/agents", agentRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes)

export default router;