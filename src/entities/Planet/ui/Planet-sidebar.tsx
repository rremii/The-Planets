import styled from "styled-components"
import React, { FC } from "react"
import { useTypedSelector } from "../../../shared/Hooks/store-hooks"


interface props {
  after: React.ReactNode
}

export const PlanetSidebar: FC<props> = ({ after }) => {


  const isSwitching = useTypedSelector(state => state.ViewMode.isSwitching)
  const isPlanetSwitching = useTypedSelector(state => state.Nav.isPlanetSwitching)


  return <PlanetSidebarLayout isSwitching={isPlanetSwitching} isActive={!isSwitching}>
    <div className="text-content">
      <h1 className="title">Earth</h1>
      <p className="info">Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's
        surface is land with
        remaining 70.8% is covered with water. Earths distance from the Sun, physical properties and geological history
        have allowed life to evolve and thrive.</p>
      <span className="link">Source: <a href="#">Wikipedia</a></span>
    </div>
    {after}
  </PlanetSidebarLayout>

}
const PlanetSidebarLayout = styled.div<{
  isActive: boolean
  isSwitching: boolean

}>`

  display: flex;
  flex-direction: column;
  gap: 30px;

  animation: ${({ isSwitching }) => isSwitching ? "slideSideBar 2.9s linear" : "none"};
  @keyframes slideSideBar {

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
