import styled from "styled-components"
import { Nav } from "./Nav"
import { LogoLink } from "../../../shared/logo-link"
import { NavBurger } from "./Nav-burger"
import { useEffect, useState } from "react"
import Mercury from "./../../../shared/assets/planet-mercury.svg"
import Venus from "./../../../shared/assets/planet-venus.svg"
import Earth from "./../../../shared/assets/planet-earth.svg"
import Mars from "./../../../shared/assets/planet-mars.svg"
import Jupiter from "./../../../shared/assets/planet-jupiter.svg"
import Saturn from "./../../../shared/assets/planet-saturn.svg"
import Uranus from "./../../../shared/assets/planet-uranus.svg"
import Neptune from "./../../../shared/assets/planet-neptune.svg"
import { planetTypes, setPlanetSwitching, setPointedPlanet } from "../model/NavSlice"
import { useAppDispatch, useTypedSelector } from "../../../shared/Hooks/store-hooks"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isPlanetSwitching = useTypedSelector(state => state.Nav.isPlanetSwitching)

  const [isBurgerActive, setBurgerActive] = useState(false)
  const [pointedPlanet, setPlanet] = useState<planetTypes | null>(null)


  useEffect(() => {
    dispatch(setPointedPlanet(pointedPlanet))
  }, [pointedPlanet])


  const OnPlanetChange = (e: any, path: string) => {
    e?.preventDefault()
    if (isPlanetSwitching) return
    dispatch(setPlanetSwitching(true))
    setTimeout(() => {
      navigate(path)
    }, 1300)
    setTimeout(() => {
      dispatch(setPlanetSwitching(false))
    }, 2900)
  }

  return <HeaderLayout>
    <LogoLink href="" />
    <div className="nav-box">
      <Nav callback={OnPlanetChange} OnHover={setPlanet} color={"rgb(222,244,252)"} href={"mercury"} />
      <Nav callback={OnPlanetChange} OnHover={setPlanet} color={"rgb(247,204,126)"} href={"venus"} />
      <Nav callback={OnPlanetChange} OnHover={setPlanet} color={"rgb(82,88,254)"} href={"earth"} />
      <Nav callback={OnPlanetChange} OnHover={setPlanet} color={"rgb(255,108,71)"} href={"mars"} />
      <Nav callback={OnPlanetChange} OnHover={setPlanet} color={"rgb(236,173,121)"} href={"jupiter"} />
      <Nav callback={OnPlanetChange} OnHover={setPlanet} color={"rgb(252,203,105)"} href={"saturn"} />
      <Nav callback={OnPlanetChange} OnHover={setPlanet} color={"rgb(102,240,212)"} href={"uranus"} />
      <Nav callback={OnPlanetChange} OnHover={setPlanet} color={"rgb(71,125,250)"} href={"neptune"} />
    </div>
    <Burger className={isBurgerActive ? "burgerActive" : ""} onClick={() => setBurgerActive(!isBurgerActive)}>
      <span /><span /><span />
    </Burger>
    <BurgerMenu isActive={isBurgerActive}>
      <NavBurger src={Mercury} href={"mercury"} />
      <NavBurger src={Venus} href={"venus"} />
      <NavBurger src={Earth} href={"earth"} />
      <NavBurger src={Mars} href={"mars"} />
      <NavBurger src={Jupiter} href={"jupiter"} />
      <NavBurger src={Saturn} href={"saturn"} />
      <NavBurger src={Uranus} href={"uranus"} />
      <NavBurger src={Neptune} href={"neptune"} />
    </BurgerMenu>
  </HeaderLayout>
}
const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  border-bottom: 1px solid rgb(55, 55, 78);
  width: 100vw;
  min-height: 83px;
  position: relative;
  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 20px;
  }
  @media (max-width: 750px) {
    padding: 16px 24px;
    flex-direction: initial;
    justify-content: space-between;
  }

  .nav-box {
    padding-top: 4px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    height: 100%;
    @media (max-width: 750px) {
      display: none;
    }

    a {
      padding-top: 10px;
    }

  }

  .burgerActive {

    span {

    }

    span:nth-of-type(1) {
      transform: translateX(-50%) rotate(-45deg);
    }

    span:nth-of-type(2) {
      opacity: 0;
      transform: translateX(-50%) rotate(-45deg);
    }

    span:nth-of-type(3) {
      transform: translateX(-50%) rotate(45deg);
    }

  }

`
const Burger = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  @media (min-width: 750px) {
    display: none;
  }
  transition: .5s;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    height: 3px;
    width: 100%;
    transition: .5s;

  }

  span:nth-of-type(1) {
    transform: translate(-50%, calc(-50% - 7px));
  }

  span:nth-of-type(2) {
  }

  span:nth-of-type(3) {
    transform: translate(-50%, calc(-50% + 7px));
  }



`
const BurgerMenu = styled.div<{
  isActive: boolean
}>`
  z-index: 15;
  position: absolute;
  top: 100%;
  padding: 0 24px;
  transition: .5s;
  transition-delay: .3s;
  left: ${({ isActive }) => isActive ? "0" : "100%"};
  width: 100vw;
  height: calc(100vh - 83px);
  background-color: hsl(240, 67%, 8%);
  display: flex;
  flex-direction: column;
  @media (min-width: 750px) {
    display: none;
  }

  & > a {
    transform: ${({ isActive }) => isActive ? "translateX(0)" : "translateX(100%)"};
    transition: .5s;

  }

  & > a:nth-of-type(1) {
    transition-delay: .1s;
  }

  & > a:nth-of-type(2) {
    transition-delay: .2s;

  }

  & > a:nth-of-type(3) {
    transition-delay: .3s;

  }

  & > a:nth-of-type(4) {
    transition-delay: .4s;

  }

  & > a:nth-of-type(5) {
    transition-delay: .5s;

  }

  & > a:nth-of-type(6) {
    transition-delay: .6s;

  }

  & > a:nth-of-type(7) {
    transition-delay: .7s;

  }

  & > a:nth-of-type(8) {
    transition-delay: .8s;

  }


`
