import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export type planetTypes = "mercury" | "venus" | "earth" | "mars" | "jupiter" | "saturn" | "uranus" | "neptune"


interface initialStateType {
  pointedPlanet: planetTypes | null
  isPlanetSwitching: boolean
}

const initialState = {
  pointedPlanet: null,
  isPlanetSwitching: false
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
    }

  }
})
export const { setPointedPlanet, setPlanetSwitching } = NavSlice.actions
export default NavSlice.reducer
