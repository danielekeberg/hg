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
    
    const scrollToTop = () => {
        document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollToVendors = () => {
        document.getElementById('vendors')?.scrollIntoView({behavior: 'smooth'})
    }

    return(
        <div className="fixed top-0 z-9999 bg-[#fbfaf9] w-full flex justify-between px-5 md:px-[15%] py-5 shadow-sm">
            <h1 onClick={scrollToTop} className="text-2xl text-[#444] cursor-pointer">Hadeland Gravstein</h1>
            <div className="hidden md:flex gap-10 items-center">
                <button onClick={scrollToTop} className="hover:text-[#444] cursor-pointer">Hjem</button>
                <button onClick={scrollToVendors} className="hover:text-[#444] cursor-pointer">Leverandører</button>
                <button onClick={scrollToContact} className="hover:text-[#444] cursor-pointer">Kontakt</button>
            </div>
            <div className="md:hidden">
                <button onClick={handleHamburger} className="font-bold text-2xl">&#9776;</button>
                <div className="relative">
                    {hamburger ?
                        <div className="absolute flex flex-col justify-center text-center z-9999 top-0 right-0 bg-white border border-neutral-400 w-50">
                            <button onClick={() => {
                                handleHamburger();
                                scrollToTop();
                            }} className="hover:text-[#444] cursor-pointer p-2 border-b border-neutral-400 w-full">Hjem</button>
                            <button onClick={() => {
                                handleHamburger();
                                scrollToVendors();
                            }} className="hover:text-[#444] cursor-pointer p-2 border-b border-neutral-400 w-full">Leverandører</button>
                            <button onClick={() => {
                                handleHamburger();
                                scrollToContact();
                            }} className="hover:text-[#444] cursor-pointer p-2 w-full">Kontakt</button>
                        </div>
                    :
                        null
                    }
                </div>
            </div>
        </div>
    )
}