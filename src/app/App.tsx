import React from "react"
import styled from "styled-components"
import { withProviders } from "./providers"
import { Routing } from "../pages"
import "./styles/style.scss"
import { Header } from "@widgets/Header"

function App() {

  return <Layout>

    <Header />
    <Routing />


  </Layout>

}

export default withProviders(App)

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: min-content;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: relative;


`

