import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export type viewMode = "overview" | "structure" | "surface"

interface initialStateType {
  viewMode: viewMode
}

const initialState = {
  viewMode: "overview"
} as initialStateType

const ViewModeSlice = createSlice({
  name: "ViewModeSlice",
  initialState,
  reducers: {

    setViewMode(state, action: PayloadAction<viewMode>) {
      state.viewMode = action.payload
    }

  }
})
export const { setViewMode } = ViewModeSlice.actions
export default ViewModeSlice.reducer
