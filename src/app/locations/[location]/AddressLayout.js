'use client'
import { officeAddress } from "@/constants/app.constants";
import { useAddress } from "@/context/AddressContext"
import { useEffect } from "react";

const AddressLayout = ({ children , footerAddress }) => {
    const { setAddress } = useAddress();

    useEffect(() => {
        if(footerAddress) {
            setAddress(footerAddress);
        }

        return () => setAddress(officeAddress)
    } , [footerAddress]);

    return (
        <>
            {children}
        </>
    )
}

export default AddressLayout