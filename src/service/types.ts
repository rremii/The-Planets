export type planetTypes = "mercury" | "venus" | "earth" | "mars" | "jupiter" | "saturn" | "uranus" | "neptune"

export type PlanetDataType = {
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
