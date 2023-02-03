import styled from "styled-components"

export const PlanetFooter = () => {
  return <PlanetFooterLayout>
    <div className="content-box">
      <h2 className="title">rotation time</h2>
      <p className="info">0.99 DAYS</p>
    </div>
    <div className="content-box">
      <h2 className="title">rotation time</h2>
      <p className="info">0.99 DAYS</p>
    </div>
    <div className="content-box">
      <h2 className="title">rotation time</h2>
      <p className="info">0.99 DAYS</p>
    </div>
    <div className="content-box">
      <h2 className="title">rotation time</h2>
      <p className="info">0.99 DAYS</p>
    </div>
  </PlanetFooterLayout>
}
const PlanetFooterLayout = styled.div`
  grid-row: 2/3;
  grid-column: span 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-bottom: 36px;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-box {
    border: 1px solid rgb(55, 55, 78);
    flex: 1 1 auto;
    padding: 20px 0 34px 24px;
    display: flex;
    flex-direction: column;
    @media (max-width: 850px) {
      width: 100%;
      flex-direction: initial;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      flex: 0 0 48px;
    }

    .title {
      font-family: Roboto, sans-serif;
      text-transform: uppercase;
      color: hsl(240, 6%, 54%);
      font-size: 14px;
      margin-bottom: 10px;
      @media (max-width: 850px) {
        font-size: 10px;
        margin-bottom: 0;
      }
    }

    .info {
      font-family: Antonio, sans-serif;
      color: white;
      font-size: 40px;
      @media (max-width: 850px) {
        font-size: 20px;
      }
    }
  }
`
