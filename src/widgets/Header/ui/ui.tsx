import styled from "styled-components"
import { Nav } from "./Nav"
import { LogoLink } from "../../../shared/logo-link"

export const Header = () => {


  return <HeaderLayout>
    <LogoLink href="" />
    <div>
      <Nav color={"rgb(222,244,252)"} href={"mercury"} />
      <Nav color={"rgb(247,204,126)"} href={"venus"} />
      <Nav color={"rgb(82,88,254)"} href={"earth"} />
      <Nav color={"rgb(255,108,71)"} href={"mars"} />
      <Nav color={"rgb(236,173,121)"} href={"jupiter"} />
      <Nav color={"rgb(252,203,105)"} href={"saturn"} />
      <Nav color={"rgb(102,240,212)"} href={"uranus"} />
      <Nav color={"rgb(71,125,250)"} href={"neptune"} />
    </div>
  </HeaderLayout>
}
const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 83px;
  padding: 0 32px;
  border-bottom: 1px solid rgb(55, 55, 78);

  & > div {
    padding-top: 4px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
  }
`
