import styled from "styled-components"
import { useTypedSelector } from "../../../shared/Hooks/store-hooks"
import { useLocation } from "react-router"
import { EarthAssets } from "../assets/earth"

interface planetAssets {
  geology: string,
  internal: string,
  overview: string
}

export const PlanetImgBox = () => {
  const location = useLocation()
  const path = location.pathname.slice(1)

  const viewMode = useTypedSelector(state => state.ViewMode.viewMode)

  let curPlanetAssets: planetAssets | null = null


  if (path === "earth") curPlanetAssets = EarthAssets

  return <PlanetImgBoxLayout>

    {viewMode === "overview" && <img src={curPlanetAssets?.overview} alt={path} />}
    {viewMode === "structure" && <img src={curPlanetAssets?.internal} alt={path} />}
    {viewMode === "surface" && <>
      <img src={curPlanetAssets?.overview} alt={path} />
      <img className="addition" src={curPlanetAssets?.geology} alt={path} />
    </>}


  </PlanetImgBoxLayout>
}

const PlanetImgBoxLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 650px) {
    padding-top: 60px;
    img {

      width: 100%;
    }

    .addition {
      width: 40% !important;
      height: initial !important;
    }
  }

  img {

  }

  .addition {
    position: absolute;
    top: 70%;
    left: 50%;
    width: 160px;
    height: 200px;
    transform: translateX(-50%);
  }
`
