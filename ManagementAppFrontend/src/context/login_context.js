import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/login_reducer.js'
import { email, pass } from '../utils/helpers.js'


const initialState = {
  isAuthenticated: false,
  email,
  pass,
  active: 0,
  isExpend: false,
  mode: 'light',
}

const LoginContext = React.createContext()

export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkingAuthentication = () => {
    dispatch({type: 'authented'})
  }
  const updateActiveClass = (index) => {
    dispatch({type: 'updateActiveClass', payload:index})
  }
  const OpenSidebar = () => {
    dispatch({type: 'openSidebar'})
  }
  const CloseSidebar = () => {
    dispatch({type: 'closeSidebar'})
  }
  const LightMode = () => {
    dispatch({type: 'lightmode'})
  }
  const DarkMode = () => {
    dispatch({type: 'darkmode'})
  }
  
  return (
    <LoginContext.Provider value={{...state, checkingAuthentication, updateActiveClass, OpenSidebar, CloseSidebar, LightMode, DarkMode}}>{children}</LoginContext.Provider>
  )
}
// make sure use
export const useLoginContext = () => {
  return useContext(LoginContext)
}
