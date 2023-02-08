import { setPlanetSetting, setPlanetSwitching } from "../../widgets/Header/model/NavSlice"
import { useAppDispatch, useTypedSelector } from "./store-hooks"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router"

const useOnPlanetChange = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname.slice(1)

  const isPlanetSwitching = useTypedSelector(state => state.Nav.isPlanetSwitching)


  const ChangePlanet = (path: string) => {
    if (isPlanetSwitching) return
    if (!pathname) {
      dispatch(setPlanetSetting(true))
      navigate(path)
      setTimeout(() => {
        dispatch(setPlanetSetting(false))
      }, 1450)
    }
    if (pathname) {
      dispatch(setPlanetSwitching(true))
      setTimeout(() => {
        navigate(path)
      }, 1300)
      setTimeout(() => {
        dispatch(setPlanetSwitching(false))
      }, 2900)
    }
  }


  return [ChangePlanet]
}
export default useOnPlanetChange
