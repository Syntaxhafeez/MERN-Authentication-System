import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [userData, setUserData] = useState(null)

    const getAuthState = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/auth/is-auth', { withCredentials: true })
            if (data.success) {
                setIsLoggedin(true)
                await getUserData()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getUserData = async () => {
        try {
            const {data}  = await axios.get(backendUrl + '/api/user/data', { withCredentials: true })
            if (data.success) {
                setUserData(data.userdata);
            } else {
                toast.error(data.message || "Failed to fetch user data");
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getAuthState()
    }, [])

    const value = {
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        getUserData
    } 

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}