import { createSlice } from "@reduxjs/toolkit"

interface initialStateType {

}

const initialState = {} as initialStateType

const NavSlice = createSlice({
  name: "NavSlice",
  initialState,
  reducers: {

    // setType(state, action: PayloadAction<drawType>) {
    //   state.drawType = action.payload
    // },

  }
})
// export const { } = NavSlice.actions
export default NavSlice.reducer
