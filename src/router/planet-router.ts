import { Router } from "express"
import planetController from "../controllers/planet-controller"

const router = Router()


router.get("/:planet", planetController.getPlanet)

export default router
