import styled from "styled-components"
import Sun from "@shared/assets/sun.png"
import Mercury from "@shared/assets/planet-mercury.svg"
import Venus from "@shared/assets/planet-venus.svg"
import Earth from "@shared/assets/planet-earth.svg"
import Mars from "@shared/assets/planet-mars.svg"
import Jupiter from "@shared/assets/planet-jupiter.svg"
import Saturn from "@shared/assets/planet-saturn.svg"
import Uranus from "@shared/assets/planet-uranus.svg"
import Neptune from "@shared/assets/planet-neptune.svg"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { NavLink } from "react-router-dom"
import useOnPlanetChange from "@shared/Hooks/useOnPlanetChange"


export const SolarSystem = () => {


  const pointedPlanet = useTypedSelector(state => state.Nav.pointedPlanet)


  const [ChangePlanet] = useOnPlanetChange()


  const OnPlanetChange = (e: any, path: string) => {
    e?.preventDefault()
    ChangePlanet(path)
  }

  return <SolarSystemLayout>
    <div className="container">

      <div className="sun-circle">
        <img src={Sun} alt="Sun" />
      </div>
      <Belt />
      <MercuryPlanet onClick={(e) => OnPlanetChange(e, "mercury")} to={"mercury"} isActive={pointedPlanet === "mercury"}
                     className={` planet-orbit`}>
        <img src={Mercury} alt="Mercury" />
      </MercuryPlanet>
      <VenusPlanet onClick={(e) => OnPlanetChange(e, "venus")} isActive={pointedPlanet === "venus"}
                   className={` planet-orbit`}>
        <img src={Venus} alt="Venus" />
      </VenusPlanet>
      <EarthPlanet onClick={(e) => OnPlanetChange(e, "earth")} isActive={pointedPlanet === "earth"}
                   className={` planet-orbit`}>
        <img src={Earth} alt="Earth" />
      </EarthPlanet>
      <MarsPlanet onClick={(e) => OnPlanetChange(e, "mars")} isActive={pointedPlanet === "mars"}
                  className={` planet-orbit`}>
        <img src={Mars} alt="Mars" />
      </MarsPlanet>
      <JupiterPlanet onClick={(e) => OnPlanetChange(e, "jupiter")} isActive={pointedPlanet === "jupiter"}
                     className={` planet-orbit`}>
        <img src={Jupiter} alt="Jupiter" />
      </JupiterPlanet>
      <SaturnPlanet onClick={(e) => OnPlanetChange(e, "saturn")} isActive={pointedPlanet === "saturn"}
                    className={` planet-orbit`}>
        <img src={Saturn} alt="Saturn" />
      </SaturnPlanet>
      <UranusPlanet onClick={(e) => OnPlanetChange(e, "uranus")} isActive={pointedPlanet === "uranus"}
                    className={` planet-orbit`}>
        <img src={Uranus} alt="Uranus" />
      </UranusPlanet>
      <NeptunePlanet onClick={(e) => OnPlanetChange(e, "neptune")} isActive={pointedPlanet === "neptune"}
                     className={` planet-orbit`}>
        <img src={Neptune} alt="Neptune" />
      </NeptunePlanet>
    </div>

  </SolarSystemLayout>

}

const SolarSystemLayout = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    transform: scale(1);
    animation: fade_out 3s linear forwards;

    .sun-circle {
      border-radius: 50%;
      width: 60px;
      height: 60px;
      box-shadow: 0 0 20px 0 orange;
      z-index: 10;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .planet-orbit {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      transition: .4s;

      img {
        transition: .4s;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &:hover {

        img {
          transform: translate(-50%, -50%) scale(1.5);
        }
      }
    }

    .not-active {
      border: 1px solid rgba(102, 166, 229, 0.12);

    }

    @keyframes orbit {
      0% {
        transform: translate(-50%, -50%) rotate(0);
      }
      100% {
        transform: translate(-50%, -50%) rotate(-360deg);
      }
    }
    @keyframes fade_out {
      0% {
        opacity: 0;
        transform: rotate(-90deg) scale(3.5);

      }
      100% {
        opacity: 1;
        transform: rotate(0) scale(1);
      }
    }

  }


`
const Belt = styled.div`

  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 1000px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  height: 330px;
  width: 330px;
  opacity: 0.7;
  border-color: transparent;
  overflow: hidden;
  transform: translate(-50%, -50%);
  -webkit-animation: orbit 179.9558282773s linear infinite;
  animation: orbit 179.9558282773s linear infinite;

  &::after {
    position: absolute;
    content: '';
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    top: 50%;
    height: 210px;
    width: 210px;
    background: transparent;
    border-radius: 140px !important;
    box-shadow: -111px -119px 0 -104px rgb(255 255 255 / 10%), 119px -14px 0 -104px rgb(255 255 255 / 34%), -90px 64px 0 -104px rgb(255 255 255 / 61%), 17px -108px 0 -104px rgb(255 255 255 / 42%), 91px -91px 0 -104px rgb(255 255 255 / 16%), 69px 66px 0 -104px rgb(255 255 255 / 77%), -120px -83px 0 -104px rgb(255 255 255 / 9%), 28px -6px 0 -104px rgb(255 255 255 / 29%), 129px 102px 0 -104px rgb(255 255 255 / 59%), -133px 53px 0 -104px rgb(255 255 255 / 26%), -77px -28px 0 -104px rgb(255 255 255 / 12%), -96px -117px 0 -104px rgb(255 255 255 / 19%), 108px -66px 0 -104px rgb(255 255 255 / 38%), 130px -137px 0 -104px rgb(255 255 255 / 49%), 119px 125px 0 -104px rgb(255 255 255 / 13%), 63px 47px 0 -104px rgb(255 255 255 / 77%), -40px -121px 0 -104px rgb(255 255 255 / 81%), 85px 13px 0 -104px rgb(255 255 255 / 58%), 19px 37px 0 -104px rgb(255 255 255 / 89%), -45px -142px 0 -104px rgb(255 255 255 / 99%), 84px -115px 0 -104px rgb(255 255 255 / 79%), 3px -107px 0 -104px rgb(255 255 255 / 76%), -75px 70px 0 -104px rgb(255 255 255 / 36%), -115px -72px 0 -104px rgb(255 255 255 / 37%), -130px -99px 0 -104px rgb(255 255 255 / 46%), 94px -95px 0 -104px rgb(255 255 255 / 40%), -87px -139px 0 -104px rgb(255 255 255 / 38%), -19px 15px 0 -104px rgb(255 255 255 / 23%), -36px 15px 0 -104px rgb(255 255 255 / 66%), 145px 142px 0 -104px rgb(255 255 255 / 78%), -121px -129px 0 -104px rgb(255 255 255 / 13%), 67px 90px 0 -104px rgb(255 255 255 / 85%), 140px 141px 0 -104px rgb(255 255 255 / 60%), -31px 27px 0 -104px rgb(255 255 255 / 68%), 72px -27px 0 -104px rgb(255 255 255 / 98%), 64px -78px 0 -104px rgb(255 255 255 / 89%), -107px 27px 0 -104px rgb(255 255 255 / 48%), 57px -35px 0 -104px rgb(255 255 255 / 54%), -6px 73px 0 -104px rgb(255 255 255 / 19%), 108px 134px 0 -104px rgb(255 255 255 / 2%), -143px -111px 0 -104px rgb(255 255 255 / 46%), 27px 135px 0 -104px rgb(255 255 255 / 34%), 118px -25px 0 -104px rgb(255 255 255 / 12%), 105px 59px 0 -104px rgb(255 255 255 / 44%), 137px -113px 0 -104px rgb(255 255 255 / 20%), 54px -7px 0 -104px rgb(255 255 255 / 26%), 7px -69px 0 -104px rgb(255 255 255 / 52%), 141px -66px 0 -104px rgb(255 255 255 / 19%), 28px -71px 0 -104px rgb(255 255 255 / 53%), -8px 4px 0 -104px rgb(255 255 255 / 98%), 125px -136px 0 -104px rgb(255 255 255 / 50%), 112px -136px 0 -104px rgb(255 255 255 / 13%), -110px 80px 0 -104px rgb(255 255 255 / 45%), 61px -34px 0 -104px rgb(255 255 255 / 13%), 10px -44px 0 -104px rgb(255 255 255 / 17%), -90px 31px 0 -104px rgb(255 255 255 / 66%), 89px 94px 0 -104px rgb(255 255 255 / 43%), 100px 35px 0 -104px rgb(255 255 255 / 54%), 137px -111px 0 -104px rgb(255 255 255 / 51%), 99px 67px 0 -104px rgb(255 255 255 / 61%), -38px -71px 0 -104px rgb(255 255 255 / 28%), -63px -3px 0 -104px rgb(255 255 255 / 63%), 26px -18px 0 -104px rgb(255 255 255 / 49%), -37px -58px 0 -104px rgb(255 255 255 / 96%), -129px 57px 0 -104px rgb(255 255 255 / 5%), 83px 22px 0 -104px rgb(255 255 255 / 41%), 86px -75px 0 -104px rgb(255 255 255 / 74%), -32px 108px 0 -104px rgb(255 255 255 / 91%), -88px -5px 0 -104px rgb(255 255 255 / 28%), 82px 58px 0 -104px rgb(255 255 255 / 47%), -100px -7px 0 -104px rgb(255 255 255 / 12%), 16px -119px 0 -104px rgb(255 255 255 / 69%), 40px 26px 0 -104px rgb(255 255 255 / 48%), -13px 126px 0 -104px rgb(255 255 255 / 18%), 58px 73px 0 -104px rgb(255 255 255 / 36%), 140px -75px 0 -104px rgb(255 255 255 / 33%), -37px 45px 0 -104px rgb(255 255 255 / 60%), 136px -10px 0 -104px rgb(255 255 255 / 46%), 106px 31px 0 -104px rgb(255 255 255 / 92%), -31px 0px 0 -104px rgb(255 255 255 / 26%), -104px 65px 0 -104px rgb(255 255 255 / 71%), -73px 67px 0 -104px rgb(255 255 255 / 36%), -77px -57px 0 -104px rgb(255 255 255 / 57%), 66px -53px 0 -104px rgb(255 255 255 / 30%), -113px -46px 0 -104px rgb(255 255 255 / 38%), -137px 120px 0 -104px rgb(255 255 255 / 77%), -117px -32px 0 -104px rgb(255 255 255 / 7%), -26px -102px 0 -104px rgb(255 255 255 / 45%), -119px -2px 0 -104px rgb(255 255 255 / 85%), 104px 2px 0 -104px rgb(255 255 255 / 39%), 51px -48px 0 -104px rgb(255 255 255 / 97%), -98px -48px 0 -104px rgb(255 255 255 / 0%), -19px 71px 0 -104px rgb(255 255 255 / 44%), 54px -70px 0 -104px rgb(255 255 255 / 87%), -132px 16px 0 -104px rgb(255 255 255 / 13%), -119px -18px 0 -104px rgb(255 255 255 / 10%), 15px 62px 0 -104px rgb(255 255 255 / 73%), 109px 45px 0 -104px rgb(255 255 255 / 79%), -99px 59px 0 -104px rgb(255 255 255 / 69%), -62px -114px 0 -104px rgb(255 255 255 / 92%), -73px -119px 0 -104px rgb(255 255 255 / 99%), -97px -128px 0 -104px rgb(255 255 255 / 45%), 79px 73px 0 -104px rgb(255 255 255 / 5%), -91px 82px 0 -104px rgb(255 255 255 / 8%), -119px -27px 0 -104px rgb(255 255 255 / 83%), 115px -63px 0 -104px rgb(255 255 255 / 52%), -60px -100px 0 -104px rgb(255 255 255 / 27%), -9px -65px 0 -104px rgb(255 255 255 / 30%), -128px -113px 0 -104px rgb(255 255 255 / 36%), 110px -73px 0 -104px rgb(255 255 255 / 57%), -111px -23px 0 -104px rgb(255 255 255 / 88%), 46px -36px 0 -104px rgb(255 255 255 / 69%), 49px -107px 0 -104px rgb(255 255 255 / 18%), -138px -104px 0 -104px rgb(255 255 255 / 48%), -138px -123px 0 -104px rgb(255 255 255 / 93%), 52px -111px 0 -104px rgb(255 255 255 / 59%), 135px -2px 0 -104px rgb(255 255 255 / 39%), 140px -15px 0 -104px rgb(255 255 255 / 34%), 15px -121px 0 -104px rgb(255 255 255 / 83%), -52px -132px 0 -104px rgb(255 255 255 / 69%), 92px 136px 0 -104px rgb(255 255 255 / 83%), -88px 19px 0 -104px rgb(255 255 255 / 54%), -76px -33px 0 -104px rgb(255 255 255 / 99%), -113px 92px 0 -104px rgb(255 255 255 / 50%), -119px 134px 0 -104px rgb(255 255 255 / 91%), 7px 38px 0 -104px rgb(255 255 255 / 56%), -49px -72px 0 -104px rgb(255 255 255 / 50%), -122px 113px 0 -104px rgb(255 255 255 / 67%), -23px -129px 0 -104px rgb(255 255 255 / 37%), -42px -58px 0 -104px rgb(255 255 255 / 56%), 12px -43px 0 -104px rgb(255 255 255 / 29%), -101px 135px 0 -104px rgb(255 255 255 / 72%), -10px -60px 0 -104px rgb(255 255 255 / 98%), 109px 37px 0 -104px rgb(255 255 255 / 86%), 97px -65px 0 -104px rgb(255 255 255 / 39%), 92px 46px 0 -104px rgb(255 255 255 / 21%), -81px 142px 0 -104px rgb(255 255 255 / 28%), -107px 16px 0 -104px rgb(255 255 255 / 65%), 93px 114px 0 -104px rgb(255 255 255 / 67%), -31px 116px 0 -104px rgb(255 255 255 / 51%), -133px 141px 0 -104px rgb(255 255 255 / 59%), 52px -94px 0 -104px rgb(255 255 255 / 46%), 32px 38px 0 -104px rgb(255 255 255 / 83%), 93px 139px 0 -104px rgb(255 255 255 / 0%), -99px -121px 0 -104px rgb(255 255 255 / 77%), -78px 2px 0 -104px rgb(255 255 255 / 22%), 35px 78px 0 -104px rgb(255 255 255 / 71%), 56px 57px 0 -104px rgb(255 255 255 / 3%), 21px -100px 0 -104px rgb(255 255 255 / 88%), -82px 11px 0 -104px rgb(255 255 255 / 35%), -81px -70px 0 -104px rgb(255 255 255 / 66%), 61px -41px 0 -104px rgb(255 255 255 / 91%), -32px 77px 0 -104px rgb(255 255 255 / 97%), -127px -81px 0 -104px rgb(255 255 255 / 43%), 37px 128px 0 -104px rgb(255 255 255 / 60%), -62px -104px 0 -104px rgb(255 255 255 / 84%), -115px -72px 0 -104px rgb(255 255 255 / 31%), -55px -68px 0 -104px rgb(255 255 255 / 3%), -32px -106px 0 -104px rgb(255 255 255 / 80%), -99px 113px 0 -104px rgb(255 255 255 / 76%), 56px 143px 0 -104px rgb(255 255 255 / 66%), 126px -102px 0 -104px rgb(255 255 255 / 21%), 72px 42px 0 -104px rgb(255 255 255 / 70%), 120px 15px 0 -104px rgb(255 255 255 / 59%), -43px -122px 0 -104px rgb(255 255 255 / 86%), 5px 64px 0 -104px rgb(255 255 255 / 46%), -59px -116px 0 -104px rgb(255 255 255 / 68%), 91px 91px 0 -104px rgb(255 255 255 / 65%), 16px -58px 0 -104px rgb(255 255 255 / 50%), -138px 30px 0 -104px rgb(255 255 255 / 12%), 81px -130px 0 -104px rgb(255 255 255 / 10%), -106px 1px 0 -104px rgb(255 255 255 / 47%), -67px 35px 0 -104px rgb(255 255 255 / 24%), 86px -37px 0 -104px rgb(255 255 255 / 78%), -25px -26px 0 -104px rgb(255 255 255 / 74%), -79px -111px 0 -104px rgb(255 255 255 / 11%), -97px 102px 0 -104px rgb(255 255 255 / 91%), 143px -118px 0 -104px rgb(255 255 255 / 63%), -11px -62px 0 -104px rgb(255 255 255 / 38%), 88px -103px 0 -104px rgb(255 255 255 / 15%), 46px -110px 0 -104px rgb(255 255 255 / 16%), 92px 30px 0 -104px rgb(255 255 255 / 35%), -125px 1px 0 -104px rgb(255 255 255 / 61%), 81px 87px 0 -104px rgb(255 255 255 / 25%), 87px -68px 0 -104px rgb(255 255 255 / 79%), -67px 126px 0 -104px rgb(255 255 255 / 50%), 103px -24px 0 -104px rgb(255 255 255 / 24%), 12px 16px 0 -104px rgb(255 255 255 / 93%), -119px -3px 0 -104px rgb(255 255 255 / 84%), -35px 35px 0 -104px rgb(255 255 255 / 33%), -110px -54px 0 -104px rgb(255 255 255 / 22%), 128px 134px 0 -104px rgb(255 255 255 / 65%), -128px -24px 0 -104px rgb(255 255 255 / 40%), 30px -43px 0 -104px rgb(255 255 255 / 50%), -102px -63px 0 -104px rgb(255 255 255 / 63%), 4px -34px 0 -104px rgb(255 255 255 / 56%), 2px 53px 0 -104px rgb(255 255 255 / 30%), -3px -140px 0 -104px rgb(255 255 255 / 4%), -38px -91px 0 -104px rgb(255 255 255 / 33%), 106px 114px 0 -104px rgb(255 255 255 / 19%), 58px -129px 0 -104px rgb(255 255 255 / 78%), 66px -42px 0 -104px rgb(255 255 255 / 82%), 73px -44px 0 -104px rgb(255 255 255 / 35%), 11px 3px 0 -104px rgb(255 255 255 / 55%), -38px -116px 0 -104px rgb(255 255 255 / 14%), 30px 34px 0 -104px rgb(255 255 255 / 43%), -33px 50px 0 -104px rgb(255 255 255 / 4%), -93px 32px 0 -104px rgb(255 255 255 / 75%), -76px -51px 0 -104px rgb(255 255 255 / 96%), -16px -37px 0 -104px rgb(255 255 255 / 97%), -97px -32px 0 -104px rgb(255 255 255 / 47%), -72px -48px 0 -104px rgb(255 255 255 / 85%), 31px 65px 0 -104px rgb(255 255 255 / 72%), 43px -9px 0 -104px rgb(255 255 255 / 20%), -33px 114px 0 -104px rgb(255 255 255 / 16%), 4px -107px 0 -104px rgb(255 255 255 / 89%), -55px -104px 0 -104px rgb(255 255 255 / 14%), -3px -1px 0 -104px rgb(255 255 255 / 80%), 116px -79px 0 -104px rgb(255 255 255 / 86%), -86px 79px 0 -104px rgb(255 255 255 / 39%), 37px -46px 0 -104px rgb(255 255 255 / 43%), 23px 14px 0 -104px rgb(255 255 255 / 40%), -67px 96px 0 -104px rgb(255 255 255 / 2%), -113px 107px 0 -104px rgb(255 255 255 / 50%), -28px 24px 0 -104px rgb(255 255 255 / 80%), 140px 21px 0 -104px rgb(255 255 255 / 34%), -25px 63px 0 -104px rgb(255 255 255 / 68%), -84px -63px 0 -104px rgb(255 255 255 / 35%), -100px -69px 0 -104px rgb(255 255 255 / 24%), 138px -58px 0 -104px rgb(255 255 255 / 33%), -21px -101px 0 -104px rgb(255 255 255 / 52%), -140px 122px 0 -104px rgb(255 255 255 / 12%), 97px 93px 0 -104px rgb(255 255 255 / 26%), 13px -99px 0 -104px rgb(255 255 255 / 38%), 69px 14px 0 -104px rgb(255 255 255 / 72%), -140px -1px 0 -104px rgb(255 255 255 / 4%), 9px 20px 0 -104px rgb(255 255 255 / 74%), 144px -90px 0 -104px rgb(255 255 255 / 70%), 3px 7px 0 -104px rgb(255 255 255 / 14%), -83px 22px 0 -104px rgb(255 255 255 / 17%), -38px 68px 0 -104px rgb(255 255 255 / 68%), 76px -137px 0 -104px rgb(255 255 255 / 5%), -119px -32px 0 -104px rgb(255 255 255 / 92%), 26px 37px 0 -104px rgb(255 255 255 / 43%), 64px 133px 0 -104px rgb(255 255 255 / 50%), -48px 132px 0 -104px rgb(255 255 255 / 58%), 87px 54px 0 -104px rgb(255 255 255 / 15%), 19px 84px 0 -104px rgb(255 255 255 / 16%), 43px -6px 0 -104px rgb(255 255 255 / 96%), -106px 138px 0 -104px rgb(255 255 255 / 32%), 91px 99px 0 -104px rgb(255 255 255 / 98%), -89px -110px 0 -104px rgb(255 255 255 / 39%), -105px 84px 0 -104px rgb(255 255 255 / 38%), -125px 131px 0 -104px rgb(255 255 255 / 92%), -84px -72px 0 -104px rgb(255 255 255 / 15%), -86px 112px 0 -104px rgb(255 255 255 / 96%), -111px 64px 0 -104px rgb(255 255 255 / 78%), -60px -122px 0 -104px rgb(255 255 255 / 37%), -26px -65px 0 -104px rgb(255 255 255 / 89%), -48px 130px 0 -104px rgb(255 255 255 / 12%), 48px -109px 0 -104px rgb(255 255 255 / 24%), 145px -138px 0 -104px rgb(255 255 255 / 54%), 99px 93px 0 -104px rgb(255 255 255 / 33%), -76px 114px 0 -104px rgb(255 255 255 / 73%), 88px 107px 0 -104px rgb(255 255 255 / 95%), 116px 59px 0 -104px rgb(255 255 255 / 86%), 37px -106px 0 -104px rgb(255 255 255 / 6%), -64px 44px 0 -104px rgb(255 255 255 / 90%), -92px -41px 0 -104px rgb(255 255 255 / 95%), 89px 49px 0 -104px rgb(255 255 255 / 75%), -120px -109px 0 -104px rgb(255 255 255 / 35%), -92px -44px 0 -104px rgb(255 255 255 / 0%), -76px -125px 0 -104px rgb(255 255 255 / 57%), 98px 93px 0 -104px rgb(255 255 255 / 48%), 0px -26px 0 -104px rgb(255 255 255 / 86%), 110px 112px 0 -104px rgb(255 255 255 / 50%), -26px 86px 0 -104px rgb(255 255 255 / 18%), -76px -103px 0 -104px rgb(255 255 255 / 27%), 42px -70px 0 -104px rgb(255 255 255 / 81%), 94px 25px 0 -104px rgb(255 255 255 / 22%), 104px -84px 0 -104px rgb(255 255 255 / 12%), -81px 95px 0 -104px rgb(255 255 255 / 59%), 70px -63px 0 -104px rgb(255 255 255 / 87%), -16px -138px 0 -104px rgb(255 255 255 / 68%), -52px -77px 0 -104px rgb(255 255 255 / 5%), 94px 135px 0 -104px rgb(255 255 255 / 31%), -121px 78px 0 -104px rgb(255 255 255 / 98%), -127px -58px 0 -104px rgb(255 255 255 / 44%), -44px 62px 0 -104px rgb(255 255 255 / 96%), -46px -117px 0 -104px rgb(255 255 255 / 35%), -89px -85px 0 -104px rgb(255 255 255 / 44%), -49px 20px 0 -104px rgb(255 255 255 / 52%), 53px 70px 0 -104px rgb(255 255 255 / 95%), -51px -32px 0 -104px rgb(255 255 255 / 9%), 89px -131px 0 -104px rgb(255 255 255 / 83%), -1px -2px 0 -104px rgb(255 255 255 / 18%), -23px 103px 0 -104px rgb(255 255 255 / 18%), 118px 68px 0 -104px rgb(255 255 255 / 20%), -31px -13px 0 -104px rgb(255 255 255 / 39%), -65px 33px 0 -104px rgb(255 255 255 / 33%), -89px 95px 0 -104px rgb(255 255 255 / 86%), 49px 65px 0 -104px rgb(255 255 255 / 78%), 125px -49px 0 -104px rgb(255 255 255 / 15%), -13px -72px 0 -104px rgb(255 255 255 / 96%), 54px -84px 0 -104px rgb(255 255 255 / 1%), -15px -50px 0 -104px rgb(255 255 255 / 63%), -65px -20px 0 -104px rgb(255 255 255 / 87%), -101px -76px 0 -104px rgb(255 255 255 / 67%), -96px -10px 0 -104px rgb(255 255 255 / 13%), -106px -108px 0 -104px rgb(255 255 255 / 21%), 24px 41px 0 -104px rgb(255 255 255 / 20%), -118px 27px 0 -104px rgb(255 255 255 / 31%), -4px 91px 0 -104px rgb(255 255 255 / 9%), 20px 99px 0 -104px rgb(255 255 255 / 26%), 123px -89px 0 -104px rgb(255 255 255 / 31%), -95px -68px 0 -104px rgb(255 255 255 / 80%), -136px -117px 0 -104px rgb(255 255 255 / 88%), -83px -131px 0 -104px rgb(255 255 255 / 72%), 10px -2px 0 -104px rgb(255 255 255 / 33%), -33px 106px 0 -104px rgb(255 255 255 / 31%), -126px -92px 0 -104px rgb(255 255 255 / 24%), -64px -34px 0 -104px rgb(255 255 255 / 5%), -89px -56px 0 -104px rgb(255 255 255 / 93%), -75px -63px 0 -104px rgb(255 255 255 / 33%), -57px -141px 0 -104px rgb(255 255 255 / 33%), -83px -123px 0 -104px rgb(255 255 255 / 10%), -63px 127px 0 -104px rgb(255 255 255 / 43%), -92px -24px 0 -104px rgb(255 255 255 / 52%), 120px -59px 0 -104px rgb(255 255 255 / 37%), 5px 11px 0 -104px rgb(255 255 255 / 1%), 51px -59px 0 -104px rgb(255 255 255 / 13%), -27px 111px 0 -104px rgb(255 255 255 / 97%), 99px -7px 0 -104px rgb(255 255 255 / 71%), -42px 11px 0 -104px rgb(255 255 255 / 97%), -79px -65px 0 -104px rgb(255 255 255 / 39%), 121px 43px 0 -104px rgb(255 255 255 / 40%), -34px -111px 0 -104px rgb(255 255 255 / 48%), -122px -26px 0 -104px rgb(255 255 255 / 85%), 63px 139px 0 -104px rgb(255 255 255 / 43%), -100px -105px 0 -104px rgb(255 255 255 / 94%), 138px -20px 0 -104px rgb(255 255 255 / 93%), 80px 40px 0 -104px rgb(255 255 255 / 89%), -80px -138px 0 -104px rgb(255 255 255 / 46%), -54px -81px 0 -104px rgb(255 255 255 / 93%), -120px -107px 0 -104px rgb(255 255 255 / 62%), 94px 105px 0 -104px rgb(255 255 255 / 19%), 66px 90px 0 -104px rgb(255 255 255 / 96%), -121px 136px 0 -104px rgb(255 255 255 / 70%), -47px -25px 0 -104px rgb(255 255 255 / 35%), -84px 80px 0 -104px rgb(255 255 255 / 3%), 123px -24px 0 -104px rgb(255 255 255 / 86%), 29px 4px 0 -104px rgb(255 255 255 / 79%), -132px 95px 0 -104px rgb(255 255 255 / 92%), 67px 39px 0 -104px rgb(255 255 255 / 42%), 70px -109px 0 -104px rgb(255 255 255 / 14%), -6px 118px 0 -104px rgb(255 255 255 / 71%), 66px -135px 0 -104px rgb(255 255 255 / 18%), -17px -37px 0 -104px rgb(255 255 255 / 96%), 105px -95px 0 -104px rgb(255 255 255 / 39%), -112px 86px 0 -104px rgb(255 255 255 / 75%), -54px 51px 0 -104px rgb(255 255 255 / 69%), -30px -52px 0 -104px rgb(255 255 255 / 56%), -35px 87px 0 -104px rgb(255 255 255 / 17%), 15px 51px 0 -104px rgb(255 255 255 / 93%), 47px 20px 0 -104px rgb(255 255 255 / 54%), 68px -74px 0 -104px rgb(255 255 255 / 88%), -95px -39px 0 -104px rgb(255 255 255 / 83%), -89px -12px 0 -104px rgb(255 255 255 / 90%), 29px -20px 0 -104px rgb(255 255 255 / 2%), 127px -107px 0 -104px rgb(255 255 255 / 11%), -5px 87px 0 -104px rgb(255 255 255 / 21%), -103px -57px 0 -104px rgb(255 255 255 / 94%), -49px -87px 0 -104px rgb(255 255 255 / 6%), 53px 126px 0 -104px rgb(255 255 255 / 61%), 108px -99px 0 -104px rgb(255 255 255 / 15%), -36px 11px 0 -104px rgb(255 255 255 / 49%), 106px 21px 0 -104px rgb(255 255 255 / 38%), -138px 44px 0 -104px rgb(255 255 255 / 65%), 73px -66px 0 -104px rgb(255 255 255 / 98%), 111px -128px 0 -104px rgb(255 255 255 / 43%), 5px -25px 0 -104px rgb(255 255 255 / 71%), -78px 109px 0 -104px rgb(255 255 255 / 89%), -55px 73px 0 -104px rgb(255 255 255 / 95%), 19px -2px 0 -104px rgb(255 255 255 / 11%), -80px -9px 0 -104px rgb(255 255 255 / 20%), -104px -59px 0 -104px rgb(255 255 255 / 32%), 139px -90px 0 -104px rgb(255 255 255 / 3%), -106px -92px 0 -104px rgb(255 255 255 / 94%), -21px 44px 0 -104px rgb(255 255 255 / 100%), 131px -132px 0 -104px rgb(255 255 255 / 60%);
  }

`


const MercuryPlanet = styled(NavLink)<{
  isActive: boolean
}>`
  width: 90px;
  height: 90px;
  animation: orbit 7.1867343561s linear infinite;
  z-index: 8;
  border: 1px solid ${({ isActive }) => isActive ? "rgba(102, 166, 229, 1)" : "rgba(102, 166, 229, 0.12)"};
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(102, 166, 229, 1) !important;

    img {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  img {
    width: 8.6px;
    height: 8.6px;
  }

`
const VenusPlanet = styled.div<{
  isActive: boolean
}>`
  width: 140px;
  height: 140px;
  animation: orbit 19.1867343561s linear infinite;
  z-index: 7;
  border: 1px solid ${({ isActive }) => isActive ? "hsl(33, 82%, 61%)" : "rgba(102, 166, 229, 0.12)"};
  cursor: pointer;

  &:hover {
    border: 1px solid hsl(33, 82%, 61%) !important;

    img {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  img {
    width: 18.6px;
    height: 18.6px;
  }

`
const EarthPlanet = styled.div<{
  isActive: boolean
}>`
  width: 190px;
  height: 190px;
  animation: orbit 30.1867343561s linear infinite;
  z-index: 6;
  border: 1px solid ${({ isActive }) => isActive ? "hsl(263, 67%, 51%)" : "rgba(102, 166, 229, 0.12)"};
  cursor: pointer;

  &:hover {
    border: 1px solid hsl(263, 67%, 51%) !important;

    img {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  img {
    width: 20.6px;
    height: 20.6px;
  }

`
const MarsPlanet = styled.div<{
  isActive: boolean
}>`
  width: 250px;
  height: 250px;
  animation: orbit 97.1867343561s linear infinite;
  z-index: 5;
  border: 1px solid ${({ isActive }) => isActive ? "hsl(10, 63%, 51%)" : "rgba(102, 166, 229, 0.12)"};
  cursor: pointer;

  &:hover {
    border: 1px solid hsl(10, 63%, 51%) !important;

    img {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  img {
    width: 13.6px;
    height: 13.6px;
  }

`
const JupiterPlanet = styled.div<{
  isActive: boolean
}>`
  width: 400px;
  height: 400px;
  animation: orbit 350.1867343561s linear infinite;
  z-index: 4;
  border: 1px solid ${({ isActive }) => isActive ? "hsl(2, 68%, 53%)" : "rgba(102, 166, 229, 0.12)"};
  cursor: pointer;

  &:hover {
    border: 1px solid hsl(2, 68%, 53%) !important;


    img {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  img {
    width: 40.6px;
    height: 40.6px;
  }

`
const SaturnPlanet = styled.div<{
  isActive: boolean
}>`
  width: 500px;
  height: 500px;
  animation: orbit 800.1867343561s linear infinite;
  z-index: 3;
  border: 1px solid ${({ isActive }) => isActive ? " hsl(17, 73%, 46%)" : " rgba(102, 166, 229, 0.12)"};
  cursor: pointer;

  &:hover {
    border: 1px solid hsl(17, 73%, 46%) !important;


    img {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  img {
    width: 40.6px;
    height: 40.6px;
  }

`

const UranusPlanet = styled.div<{
  isActive: boolean
}>`
  width: 570px;
  height: 570px;
  animation: orbit 2500.1867343561s linear infinite;
  z-index: 2;
  border: 1px solid ${({ isActive }) => isActive ? "hsl(169, 73%, 44%)" : "rgba(102, 166, 229, 0.12)"};
  cursor: pointer;

  &:hover {
    border: 1px solid hsl(169, 73%, 44%) !important;


    img {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  img {
    animation: fade_out_planet 1.5s linear forwards;
    animation-delay: 2.6s;
    width: 23.6px;
    height: 23.6px;
  }

`

const NeptunePlanet = styled.div<{
  isActive: boolean
}>`
  width: 625px;
  height: 625px;
  animation: orbit 4800.1867343561s linear infinite;
  z-index: 1;
  border: 1px solid ${({ isActive }) => isActive ? "hsl(222, 87%, 56%)" : "rgba(102, 166, 229, 0.12)"};
  cursor: pointer;

  &:hover {
    border: 1px solid hsl(222, 87%, 56%) !important;


    img {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  img {
    width: 18.6px;
    height: 18.6px;
  }

`

