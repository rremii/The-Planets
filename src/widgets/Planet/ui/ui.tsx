import { PlanetFooter, PlanetImgBox, PlanetSidebar } from "../../../entities/Planet"
import styled from "styled-components"
import { SwitchViewMode } from "../../../features/SwitchViewMode"

export const PlanetWidget = () => {

  return <PlanetWidgetLayout>
    <PlanetImgBox />
    <PlanetSidebar after={<SwitchViewMode />} />
    <PlanetFooter />
  </PlanetWidgetLayout>
}
const PlanetWidgetLayout = styled.main`
  display: grid;
  grid-template-columns: 2.2fr 1fr;
  grid-template-rows: min-content min-content;
  height: 100%;
  width: 100%;
  padding-top: 30px;
  padding-right: 40px;
  padding-left: 40px;
  row-gap: 70px;
  position: relative;
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }

`
