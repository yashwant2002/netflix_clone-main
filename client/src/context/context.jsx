/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import React from "react";

const AppContext = React.createContext()


export const AppProvider = ({ children }) => {

    const [account, setAccount] = useState("")


    return <AppContext.Provider value={{ setAccount, account }} >{children}</AppContext.Provider>
}



export const useGlobalContext = () => {
    return useContext(AppContext)
}