import styled from "styled-components"
import { PlanetWidget } from "../../widgets/Planet"

const EarthPage = () => {
  return <EarthPageLayout>
    <PlanetWidget />
  </EarthPageLayout>
}
export default EarthPage
const EarthPageLayout = styled.div`
  height: 100%;
  width: 100vw;
  flex: 1 1 auto;

  display: flex;
  align-items: center;
  justify-content: center;

`
