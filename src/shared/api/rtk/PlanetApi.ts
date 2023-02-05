import { planetTypes } from "widgets/Header/model/NavSlice"
import { Api } from "../config/Api"

export type planetDataType = {
  name: planetTypes,
  introInfo: {
    overview: string
    structure: string
    surface: string
  },
  source: string,
  Info: {
    rotationTime: string,
    revolutionTime: string,
    radius: string,
    averageTemp: string
  }
}

const PlanetApi = Api.injectEndpoints({
  endpoints: (build) => ({
    getPlanet: build.query <planetDataType, string>({
      query: (planet) => ({
        url: "planet/" + planet,
        method: "GET"
      })
    })
  }),
  overrideExisting: false
})

export const {
  useGetPlanetQuery
} = PlanetApi
