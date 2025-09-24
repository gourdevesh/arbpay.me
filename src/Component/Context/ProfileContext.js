import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// 1. Create Context
export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const BASE_URL = process.env.REACT_APP_BASE_API_URL;
     const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token"); 
            const response = await axios.get(`${BASE_URL}/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            setProfile(response.data);
        } catch (error) {
            console.error("Error fetching profile:", error);
        } finally {
            setLoading(false);
        }
    };

  useEffect(() => {
    fetchProfile();
}, []);

    return (
        <ProfileContext.Provider value={{ profile, loading,fetchProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};
