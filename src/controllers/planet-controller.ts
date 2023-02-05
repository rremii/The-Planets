import PlanetService, { planetTypes } from "../service/planet-service"
import { Request, Response } from "express"

interface IPlanetController {
  getPlanet(request: Request, response: Response): void
}

class PlanetController implements IPlanetController {


  getPlanet(request: Request, response: Response) {
    const planet = request.params.planet as planetTypes

    const data = PlanetService.getPlanet(planet)

    response.json(data)
  }


}

export default new PlanetController()
