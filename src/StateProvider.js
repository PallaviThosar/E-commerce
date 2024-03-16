import React, { createContext, useContext, useReducer } from "react";

//Prepare the dataLayer
export const StateContex = createContext();
    
//wrap the app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContex.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContex.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContex);