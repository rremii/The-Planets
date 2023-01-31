import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import EarthPage from "./Earth/EarthPage"

const MainPage = lazy(() => import("./Main/MainPage"))

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/earth" element={<EarthPage />} />
    </Routes>
  )
}
