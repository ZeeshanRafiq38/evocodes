"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunSvg } from "@/assets/svgs";
import MoonSvg from "@/assets/svgs/MoonSvg";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => setMounted(true), []);

    if (!mounted) return <>...</>;

    if (currentTheme === "dark") {
        return (
            <button 
            className="h-6 w-6" 
            onClick={() => setTheme("light")}
            title='Light Theme'
            >
                <SunSvg />
            </button>
        )
    }

    if (currentTheme === "light") {
        return (
            <button 
            className="h-6 w-6 text-gray-900" 
            onClick={() => setTheme("dark")} 
            title='Dark Theme'
            >
                <MoonSvg />
            </button>
        );
    }
}