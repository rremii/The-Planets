import styled from "styled-components"
import React from "react"
import { NavLink } from "react-router-dom"


interface props {
  href: string
}

export const LogoLink = React.memo(({ href }: props) => {
  return <NavLink to={href}>
    <LogoLayout>
      the planets
    </LogoLayout>
  </NavLink>
})
const LogoLayout = styled.div`
  font-size: 28px;
  font-family: 'Antonio', sans-serif;
  color: hsl(0, 0%, 100%);
  text-transform: uppercase;
  letter-spacing: -1.05px;
`
