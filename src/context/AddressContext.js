"use client"
import app from '@/constants/app.constants';
import React, { createContext, useContext, useState } from 'react';

const AddressContext = createContext();

export const useAddress = () => useContext(AddressContext);

export const AddressProvider = ({ children }) => {
    const [address, setAddress] = useState(app.officeAddress); // default address

    return (
        <AddressContext.Provider value={{ address, setAddress }}>
            {children}
        </AddressContext.Provider>
    );
};
