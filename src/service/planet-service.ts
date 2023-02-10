import planets from "../mocks/mocks"
import { PlanetDataType, planetTypes } from "./types"


interface IPlanetService {
  getPlanet(planet: planetTypes): PlanetDataType
}


class PlanetService implements IPlanetService {

  getPlanet(planet: planetTypes) {
    return planets.find(({ name }) => name === planet)
  }

}

export default new PlanetService()
