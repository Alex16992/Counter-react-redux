import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
  name: "",
  isLoggedIn: false,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    },
  },
})

export const { increment, decrement, reset, setName, login, logout } =
  counterSlice.actions

export default counterSlice.reducer
