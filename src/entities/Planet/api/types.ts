import { planetTypes } from "../../../widgets/Header/model/NavSlice"

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
