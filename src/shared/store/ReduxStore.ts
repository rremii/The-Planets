import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { PreloadedState } from "redux"

import NavSlice from "../../widgets/Header/model/NavSlice"
import ViewModeSlice from "../../features/SwitchViewMode/model/ViewModeSlice"

const rootReducer = combineReducers({
  Nav: NavSlice,
  ViewMode: ViewModeSlice
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: true
  })
}

export type RootState = ReturnType<typeof rootReducer>


export const store = setupStore()


