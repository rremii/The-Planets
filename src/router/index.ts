import { Router } from "express"
import planetRouter from "./planet-router"

const router = Router()

router.use("/planet/", planetRouter)


export default router
