'use client';
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [hamburger, setHamburger] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setHamburger(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    })

    const handleHamburger = () => {
        if(hamburger) {
            setHamburger(false);
            return;
        }
        setHamburger(true);
    }
    
    const scrollToTop = () => {
        window.location.href = '../'
    }

    return(
        <div className="fixed top-0 z-999999 bg-[#fbfaf9] w-full flex justify-between px-5 md:px-[15%] py-3 md:py-5 shadow-sm">
            <h1 onClick={scrollToTop} className="text-2xl text-[#444] cursor-pointer">Hadeland Gravstein</h1>
            <div className="hidden md:flex gap-10 items-center">
                <Link href="../" className="hover:text-[#444] cursor-pointer">Hjem</Link>
                <Link href="../produkter/" className="hover:text-[#444] cursor-pointer">Produkter</Link>
                <Link href="../kontakt/" className="hover:text-[#444] cursor-pointer">Kontakt</Link>
            </div>
            <div className="md:hidden">
                <button onClick={handleHamburger} className="font-bold text-2xl">&#9776;</button>
                <div className="relative">
                    {hamburger && (
                        <div ref={menuRef} className="absolute flex flex-col justify-center text-center z-9999 top-0 right-0 bg-white border border-neutral-400 w-50">
                            <Link onClick={handleHamburger} href="../" className="hover:text-[#444] cursor-pointer p-2 border-b border-neutral-400 w-full">Hjem</Link>
                            <Link onClick={handleHamburger} href="../produkter/" className="hover:text-[#444] cursor-pointer p-2 border-b border-neutral-400 w-full">Produkter</Link>
                            <Link onClick={handleHamburger} href="../kontakt/" className="hover:text-[#444] cursor-pointer p-2 w-full">Kontakt</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}