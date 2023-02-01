import styled from "styled-components"
import { SolarSystem } from "../../widgets/SolarSystem"
//TODO use alies
const MainPage = () => {

  return <MainPageLayout>
    <SolarSystem />
  </MainPageLayout>

}
export default MainPage
const MainPageLayout = styled.div`

  height: 100%;
  width: 100vw;

  flex: 1 1 auto;

  display: flex;
  align-items: center;
  justify-content: center;

`
