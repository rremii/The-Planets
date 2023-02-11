import { Api } from "@shared/api/config/Api"
import { planetDataType } from "../types"


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
