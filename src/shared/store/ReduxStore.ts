import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { PreloadedState } from "redux"

import NavSlice from "../../widgets/Header/model/NavSlice"
import ViewModeSlice from "../../features/SwitchViewMode/model/ViewModeSlice"
import { Api } from "../api/config/Api"

const rootReducer = combineReducers({
  Nav: NavSlice,
  ViewMode: ViewModeSlice,
  [Api.reducerPath]: Api.reducer

})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware =>
      getDefaultMiddleware().concat(Api.middleware)),
    devTools: true
  })
}

export type RootState = ReturnType<typeof rootReducer>


export const store = setupStore()


