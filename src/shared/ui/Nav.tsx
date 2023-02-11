import styled from "styled-components"
import { FC, SetStateAction } from "react"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router"
import { planetTypes } from "@widgets/Header/types"

interface props {
  OnHover: (href: SetStateAction<planetTypes | null>) => void
  href: planetTypes
  color: string
  callback?: (e: any, path: string) => void
}

export const Nav: FC<props> = ({ href, color, OnHover, callback }) => {

  const location = useLocation()

  const onMouseHover = () => {
    OnHover(href)
  }
  const onMouseOut = () => {
    OnHover(null)
  }


  const pathname = location.pathname.slice(1)
  return <NavLayout onClick={(e: any) => callback ? callback(e, href) : ""} onMouseOut={onMouseOut}
                    onMouseOver={onMouseHover}
                    isActive={pathname === href}
                    color={color}
                    to={href}>
    <span>{href}</span>
  </NavLayout>
}
const NavLayout = styled(NavLink)<{
  color: string
  isActive: boolean
}>`
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    border-radius: 3px;
    width: 100%;
    height: 4px;
    background-color: ${({ color }) => color};
    transform: ${({ isActive }) => isActive ? "scaleX(1)" : "scaleX(0)"};
    transition: 0.5s;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  span {
    font-family: 'League Spartan', sans-serif;
    color: white;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

`
