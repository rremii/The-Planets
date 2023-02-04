import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export type viewMode = "overview" | "structure" | "surface"

interface initialStateType {
  viewMode: viewMode
  isSwitching: boolean
}

const initialState = {
  viewMode: "overview",
  isSwitching: false
} as initialStateType

const ViewModeSlice = createSlice({
  name: "ViewModeSlice",
  initialState,
  reducers: {

    setViewMode(state, action: PayloadAction<viewMode>) {
      state.viewMode = action.payload
    },
    setIsSwitching(state, action: PayloadAction<boolean>) {
      state.isSwitching = action.payload
    }

  }
})
export const { setViewMode, setIsSwitching } = ViewModeSlice.actions
export default ViewModeSlice.reducer
