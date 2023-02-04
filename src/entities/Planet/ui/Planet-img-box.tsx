import styled from "styled-components"
import { useTypedSelector } from "../../../shared/Hooks/store-hooks"
import useGetCurPlanetAssets from "../model/useGetCurPlanetAssets"
import setViewModeOnUrlChange from "../model/setViewModeOnUrlChange"


export const PlanetImgBox = () => {

  const viewMode = useTypedSelector(state => state.ViewMode.viewMode)
  const isSwitching = useTypedSelector(state => state.ViewMode.isSwitching)
  const isPlanetSwitching = useTypedSelector(state => state.Nav.isPlanetSwitching)

  setViewModeOnUrlChange()

  const { curPlanetAssets } = useGetCurPlanetAssets()

  return <PlanetImgBoxLayout isSwitching={isPlanetSwitching} isActive={!isSwitching}>
    {viewMode === "overview" && <img src={curPlanetAssets?.overview} alt="planet overview" />}
    {viewMode === "structure" && <img src={curPlanetAssets?.internal} alt="planet structure" />}
    {viewMode === "surface" && <>
      <img src={curPlanetAssets?.overview} alt="planet surface" />
      <img className="addition" src={curPlanetAssets?.geology} alt="addition" />
    </>}


  </PlanetImgBoxLayout>
}

const PlanetImgBoxLayout = styled.div<{
  isActive: boolean
  isSwitching: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: .7s;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transform: ${({ isActive }) => isActive ? "scale(1) rotate(0)" : "scale(0.5) rotate(180deg)"};

  animation: ${({ isSwitching }) => isSwitching ? "slide 2.5s linear" : "none"};
  @keyframes slide {

    0% {
      opacity: 1;

      transform: translateY(0) scale(1) translateX(0);
    }

    39% {
      opacity: 0;
    }

    49% {
      opacity: 0;
      transform: scale(0.5) translateY(20%) translateX(-80%) rotate(-90deg);
    }
    50% {
      opacity: 0;
      transform: scale(0.5) translateY(20%) translateX(80%) rotate(90deg);
    }
    59% {
      opacity: 0;
    }
    100% {
      translateY(0)
      opacity: 1;
      transform: scale(1) translateX(0) rotate(0deg);
    }

  }

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
