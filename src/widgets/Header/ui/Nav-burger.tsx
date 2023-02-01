import styled from "styled-components"
import { FC } from "react"
import { NavLink } from "react-router-dom"


const ArrowRight = () => {
  return <svg color="hsl(240, 6%, 54%)" viewBox="0 0 1024 1024"
              style={{
                display: "inline-block",
                stroke: "currentcolor",
                fill: "currentcolor",
                width: "20px",
                height: "20px",
                marginTop: "5px"

              }}>
    <path d="M115.5-30.167l-60.333 60.333 311.167 311.167-311.167 311.167 60.333 60.333 371.5-371.5z" />
  </svg>
}

interface props {
  href: string
  src: string
}

export const NavBurger: FC<props> = ({ href, src }) => {

  return <NavBurgerLayout to={href}>
    <img src={src} alt={src} />
    <span>{href}</span>
    <ArrowRight />
  </NavBurgerLayout>
}


const NavBurgerLayout = styled(NavLink)`
  display: grid;
  grid-template-columns: min-content min-content 1fr min-content;
  grid-template-rows: 1fr;
  align-items: center;
  border-bottom: 1px solid rgb(55, 55, 78);
  width: 100%;
  height: 65px;

  img {
    width: 20px;
    height: 20px;
    grid-column: 1/2;
    margin-right: 20px;
  }

  svg {
    grid-column: 4/5;
  }

  span {
    grid-column: 2/3;
    font-family: 'League Spartan', sans-serif;
    color: white;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`
