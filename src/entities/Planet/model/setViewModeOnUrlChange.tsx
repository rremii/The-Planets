import { useAppDispatch } from "../../../shared/Hooks/store-hooks"
import { useLocation } from "react-router"
import { useEffect } from "react"
import { setViewMode } from "../../../features/SwitchViewMode/model/ViewModeSlice"

const setViewModeOnUrlChange = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()


  useEffect(() => {
    dispatch(setViewMode("overview"))
  }, [location.pathname])


}
export default setViewModeOnUrlChange
