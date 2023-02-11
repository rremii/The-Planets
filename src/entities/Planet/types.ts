import { planetTypes } from "../../widgets/Header/types"

export interface planetAssets {
  geology: string,
  internal: string,
  overview: string
}

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

