import { useEffect } from "react"
import { useLocation } from "react-router"


export const mercuryColor = "rgb(65,157,185)"
export const venusColor = "rgb(247,204,126)"
export const earthColor = "rgb(82,88,254)"
export const marsColor = "rgb(255,108,71)"
export const jupiterColor = "rgb(236,173,121)"
export const saturnColor = "rgb(252,203,105)"
export const uranusColor = "rgb(102,240,212)"
export const neptuneColor = "rgb(71,125,250)"


const useSetCssVars = () => {
  const location = useLocation()
  const pathname = location.pathname.slice(1)


  useEffect(() => {
    let curPlanetColor = ""
    if (pathname === "earth") curPlanetColor = earthColor
    if (pathname === "jupiter") curPlanetColor = jupiterColor
    if (pathname === "mars") curPlanetColor = marsColor
    if (pathname === "mercury") curPlanetColor = mercuryColor
    if (pathname === "neptune") curPlanetColor = neptuneColor
    if (pathname === "saturn") curPlanetColor = saturnColor
    if (pathname === "uranus") curPlanetColor = uranusColor
    if (pathname === "venus") curPlanetColor = venusColor

    document.documentElement.style.setProperty("--planet-color", curPlanetColor)
  }, [pathname])

}
export default useSetCssVars
