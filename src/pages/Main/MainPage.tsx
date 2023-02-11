import styled from "styled-components"
import { SolarSystem } from "@widgets/SolarSystem"

const MainPage = () => {

  return <MainPageLayout>
    <SolarSystem />
  </MainPageLayout>

}
export default MainPage
const MainPageLayout = styled.div`

  flex: 1 1 auto;
  width: 100vw;
  position: relative;



`
