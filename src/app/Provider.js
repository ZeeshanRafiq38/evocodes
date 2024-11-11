import { AddressProvider } from '@/context/AddressContext'
import React from 'react'

const Provider = ({ children }) => {
    return (
        <AddressProvider>
            {children}
        </AddressProvider>
    )
}

export default Provider