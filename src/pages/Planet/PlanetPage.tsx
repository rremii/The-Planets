import styled from "styled-components"
import { PlanetWidget } from "../../widgets/Planet"

const PlanetPage = () => {
  return <PlanetPageLayout>
    <PlanetWidget />
  </PlanetPageLayout>
}
export default PlanetPage
const PlanetPageLayout = styled.div`
  height: 100%;
  width: 100vw;
  flex: 1 1 auto;

  display: flex;
  align-items: center;
  justify-content: center;

`
