import { useLocation } from "react-router"
import { useTypedSelector } from "../../../shared/Hooks/store-hooks"
import { EarthAssets } from "../assets/earth"
import { JupiterAssets } from "../assets/jupiter"
import { MarsAssets } from "../assets/mars"
import { MercuryAssets } from "../assets/mercury"
import { NeptuneAssets } from "../assets/neptune"
import { SaturnAssets } from "../assets/saturn"
import { UranusAssets } from "../assets/uranus"
import { VenusAssets } from "../assets/venus"
import { planetAssets } from "./types"

const useGetCurPlanetAssets = () => {

  const location = useLocation()
  const path = location.pathname.slice(1)


  let curPlanetAssets: planetAssets | null = null

  if (path === "earth") curPlanetAssets = EarthAssets
  if (path === "jupiter") curPlanetAssets = JupiterAssets
  if (path === "mars") curPlanetAssets = MarsAssets
  if (path === "mercury") curPlanetAssets = MercuryAssets
  if (path === "neptune") curPlanetAssets = NeptuneAssets
  if (path === "saturn") curPlanetAssets = SaturnAssets
  if (path === "uranus") curPlanetAssets = UranusAssets
  if (path === "venus") curPlanetAssets = VenusAssets

  return { curPlanetAssets }

}
export default useGetCurPlanetAssets
