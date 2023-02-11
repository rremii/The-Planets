import { useAppDispatch, useTypedSelector } from "./store-hooks"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router"
import { NavModel } from "@widgets/Header"


const useOnPlanetChange = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname.slice(1)

  const isPlanetSwitching = useTypedSelector(state => state.Nav.isPlanetSwitching)


  const ChangePlanet = (path: string) => {
    if (isPlanetSwitching) return
    if (!pathname) {
      dispatch(NavModel.setPlanetSetting(true))
      navigate(path)
      setTimeout(() => {
        dispatch(NavModel.setPlanetSetting(false))
      }, 1450)
    }
    if (pathname) {
      dispatch(NavModel.setPlanetSwitching(true))
      setTimeout(() => {
        navigate(path)
      }, 1300)
      setTimeout(() => {
        dispatch(NavModel.setPlanetSwitching(false))
      }, 2900)
    }
  }


  return [ChangePlanet]
}
export default useOnPlanetChange
