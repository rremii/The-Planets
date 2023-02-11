import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit"
import { ViewModeModel } from "@features/SwitchViewMode"
import { Reducer } from "redux"
import { NavModel } from "@widgets/Header"
import { Api } from "../api/config/Api"

const rootReducer: Reducer = combineReducers({
  Nav: NavModel.NavReducer,
  ViewMode: ViewModeModel.ViewModeReducer,
  [Api.reducerPath]: Api.reducer

})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware =>
      getDefaultMiddleware().concat(Api.middleware)),
    devTools: false
  })
}

export type RootState = ReturnType<typeof rootReducer>


export const store = setupStore()


