import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  increment,
  decrement,
  reset,
  setName,
  login,
  logout,
} from "../redux/counterSlice"

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const name = useSelector((state) => state.counter.name)
  const isLoggedIn = useSelector((state) => state.counter.isLoggedIn)

  const dispatch = useDispatch()
  const [newName, setNewName] = useState("")

  const handleLogin = () => {
    if (!isLoggedIn) {
      dispatch(login())
    } else {
      dispatch(logout())
    }
  }

  const handleSetName = () => {
    dispatch(setName(newName))
    setNewName("")
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <div>
        <h2>User: {name ? name : "No name set"}</h2>
        <input
          type='text'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder='Enter name'
        />
        <button onClick={handleSetName}>Set Name</button>
      </div>

      <div>
        <h2>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h2>
        <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      </div>
    </div>
  )
}

export default Counter
