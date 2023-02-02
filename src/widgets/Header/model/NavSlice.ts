import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export type planetTypes = "mercury" | "venus" | "earth" | "mars" | "jupiter" | "saturn" | "uranus" | "neptune"


interface initialStateType {
  pointedPlanet: planetTypes | null
}

const initialState = {
  pointedPlanet: null
} as initialStateType

const NavSlice = createSlice({
  name: "NavSlice",
  initialState,
  reducers: {

    setPointedPlanet(state, action: PayloadAction<planetTypes | null>) {
      state.pointedPlanet = action.payload
    }

  }
})
export const { setPointedPlanet } = NavSlice.actions
export default NavSlice.reducer
