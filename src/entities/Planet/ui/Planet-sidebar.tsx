import styled from "styled-components"
import React, { FC } from "react"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useLocation } from "react-router"
import useSetCssVars from "@shared/Hooks/useSetCssVars"
import { useGetPlanetQuery } from "../api/PlanetApi"


interface props {
  after: React.ReactNode
}

export const PlanetSidebar: FC<props> = ({ after }) => {
  const location = useLocation()
  const pathname = location.pathname.slice(1)


  const isSwitching = useTypedSelector(state => state.ViewMode.isSwitching)
  const viewMode = useTypedSelector(state => state.ViewMode.viewMode)
  const isPlanetSwitching = useTypedSelector(state => state.Nav.isPlanetSwitching)
  const isPlanetSetting = useTypedSelector(state => state.Nav.isPlanetSetting)


  useSetCssVars()

  const { data: planet } = useGetPlanetQuery(pathname, {
    skip: !pathname
  })


  return <PlanetSidebarLayout isSetting={isPlanetSetting} isSwitching={isPlanetSwitching} isActive={!isSwitching}>
    <div className="text-content">
      <h1 className="title">{planet?.name}</h1>
      <p className="info">{
        viewMode === "overview" ? planet?.introInfo?.overview :
          viewMode === "structure" ? planet?.introInfo?.structure :
            viewMode === "surface" ? planet?.introInfo?.surface : ""}</p>
      <span className="link">Source: <a href={planet?.source}>Wikipedia</a></span>
    </div>
    {after}
  </PlanetSidebarLayout>

}
const PlanetSidebarLayout = styled.div<{
  isActive: boolean
  isSwitching: boolean | null
  isSetting: boolean | null
}>`

  display: flex;
  flex-direction: column;
  gap: 30px;

  animation: ${({ isSwitching, isSetting }) => {
    if (isSwitching === null && isSetting === null) return "slideSideBarRight 1.45s linear !important"
    if (isSetting) return "slideSideBarRight 1.45s linear !important"
    if (isSwitching) return "slideSideBarBoth 2.9s linear !important"
    else return "none !important"
  }};
  @keyframes slideSideBarRight {
    0% {
      opacity: 0;
      transform: translateX(10%);
    }
    30% {
      transform: translateX(10%);
    }
    35% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }

  }
  @keyframes slideSideBarBoth {

    0% {
      opacity: 1;

      transform: translateX(0);
    }

    39% {
      opacity: 0;
    }

    49% {
      transform: translateX(10%);
    }
    60% {
      transform: translateX(10%);
    }
    69% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }

  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 18px;

    .title {
      text-transform: uppercase;
      font-size: 80px;
      font-family: Antonio, sans-serif;
      color: white;
    }

    .info {
      font-size: 18px;
      font-weight: 400;
      font-family: 'League Spartan', sans-serif;
      color: rgba(255, 255, 255, 0.75);
      line-height: 1.6;
      transition: .7s;
      opacity: ${({ isActive }) => isActive ? 1 : 0};
      transform: ${({ isActive }) => isActive ? "scaleY(1)" : "scaleY(1.1) "};


    }

    .link {
      color: hsl(240, 6%, 54%);
      font-size: 18px;
      font-family: 'League Spartan', sans-serif;

      a {
        color: hsl(240, 6%, 54%);
        font-size: 18px;
        font-family: 'League Spartan', sans-serif;
        text-decoration: underline;
        font-weight: 600;
      }
    }
  }

`
