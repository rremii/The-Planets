import { useAppDispatch } from "../../../shared/Hooks/store-hooks"
import { useLocation } from "react-router"
import { useEffect } from "react"
import { ViewModeModel } from "./../../../features/SwitchViewMode"


const setViewModeOnUrlChange = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()


  useEffect(() => {
    dispatch(ViewModeModel.setViewMode("overview"))
  }, [location.pathname])


}
export default setViewModeOnUrlChange
