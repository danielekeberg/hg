'use client';
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [hamburger, setHamburger] = useState(false);

    const handleHamburger = () => {
        if(hamburger) {
            setHamburger(false);
            return;
        }
        setHamburger(true);
    }

    const goBack = () => {
        window.location.href = "../";
    }

    return(
        <div className="fixed top-0 z-9999 bg-[#fbfaf9] w-full flex justify-between px-5 md:px-[15%] py-5 shadow-sm">
            <h1 onClick={goBack} className="text-2xl text-[#444] cursor-pointer">Hadeland Gravstein</h1>
            <div className="hidden md:flex gap-10 items-center">
                <Link href="../" className="hover:text-[#444] cursor-pointer">Hjem</Link>
                <Link href="../contact/" className="hover:text-[#444] cursor-pointer">Kontakt</Link>
            </div>
            <div className="md:hidden">
                <button onClick={handleHamburger} className="font-bold text-2xl">&#9776;</button>
                <div className="relative">
                    {hamburger ?
                        <div className="absolute flex flex-col justify-center text-center z-9999 top-0 right-0 bg-white border border-neutral-400 w-50">
                            <Link href="../" onClick={handleHamburger} className="hover:text-[#444] cursor-pointer p-2 border-b border-neutral-400 w-full">Hjem</Link>
                            <Link href="../contact/" onClick={handleHamburger} className="hover:text-[#444] cursor-pointer p-2 w-full">Kontakt</Link>
                        </div>
                    :
                        null
                    }
                </div>
            </div>
        </div>
    )
}