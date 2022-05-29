import React, { createContext, useContext, useReducer } from "react";

// prepare the data layer
export const StateContext = createContext();

//wrap our app and provide the data layer

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
// Pull information from data layer
export const useStateValue = () => useContext(StateContext);
