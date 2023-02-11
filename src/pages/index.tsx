import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import PlanetPage from "./Planet/PlanetPage"

const MainPage = lazy(() => import("./Main/MainPage"))

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/earth" element={<PlanetPage />} />
      <Route path="/mercury" element={<PlanetPage />} />
      <Route path="/venus" element={<PlanetPage />} />
      <Route path="/mars" element={<PlanetPage />} />
      <Route path="/jupiter" element={<PlanetPage />} />
      <Route path="/saturn" element={<PlanetPage />} />
      <Route path="/uranus" element={<PlanetPage />} />
      <Route path="/neptune" element={<PlanetPage />} />
    </Routes>
  )
}
