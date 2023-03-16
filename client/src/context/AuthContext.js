import React, { createContext, useReducer, useContext } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ reducer, initialState, children }) => {
  return (
    <AuthContext.Provider value={useReducer(reducer, initialState)}>

      {children}

    </AuthContext.Provider>)
}

export const useStateValue = () => {
  return useContext(AuthContext)
}