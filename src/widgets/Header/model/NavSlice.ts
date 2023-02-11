import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { planetTypes } from "../types"


interface initialStateType {
  pointedPlanet: planetTypes | null
  isPlanetSwitching: boolean | null
  isPlanetSetting: boolean | null
}

const initialState = {
  pointedPlanet: null,
  isPlanetSwitching: null,
  isPlanetSetting: null
} as initialStateType

const NavSlice = createSlice({
  name: "NavSlice",
  initialState,
  reducers: {

    setPointedPlanet(state, action: PayloadAction<planetTypes | null>) {
      state.pointedPlanet = action.payload
    },
    setPlanetSwitching(state, action: PayloadAction<boolean>) {
      state.isPlanetSwitching = action.payload
    },
    setPlanetSetting(state, action: PayloadAction<boolean>) {
      state.isPlanetSetting = action.payload
    }

  }
})
export const { setPointedPlanet, setPlanetSwitching, setPlanetSetting } = NavSlice.actions
export const NavReducer = NavSlice.reducer
