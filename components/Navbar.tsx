"use client"

import { UserButton } from "@clerk/nextjs";
import { useMantineColorScheme, Button } from "@mantine/core";
import { useState } from "react";
import { IoSearch, IoMoon, IoSunny } from "react-icons/io5"

export const Navbar = () => {

    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <div className="flex items-center justify-between pt-3 pb-3 bg-black">
            <div className="flex items-center space-x-8 ml-8">
                <h1 className="text-gray-300 text-2xl font-semibold">StockEx</h1>
                <div>
                    <IoSearch className="absolute top-[1.125rem] translate-x-2 text-xl"/>
                    <input type="text" placeholder="Search" className="rounded-2xl pl-8 py-1 outline-none"/>
                </div>
                <Button bg={"teal"} h={35} onClick={() => colorScheme == "dark" ? setColorScheme("light") : setColorScheme("dark")}>
                    {colorScheme == "dark" ? <IoSunny/> : <IoMoon/>}
                </Button>
            </div>
            <div className="text-white">
                <ul className="flex space-x-8">
                    <li>
                        <a href="/">Dashboard</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </ul>
            </div>
            <div className="mr-8">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}