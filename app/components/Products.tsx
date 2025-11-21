'use client';
import { useState, useEffect, useRef } from "react";
import data from "@/app/data/data.json";

type Products = {
    name: string,
    id: number;
    price: number,
    img: string
    vendor: string;
}

export default function Products() {
    const [sortBy, setSortBy] = useState<'standard' | 'price-asc' | 'price-desc'>("standard");
    const labels: Record<'standard' | 'price-asc' | 'price-desc', any> = {
        standard: "Standard",
        "price-asc": "Pris: Lav til høy",
        "price-desc": "Pris: Høy til lav",
    }
    const [products, setProducts] = useState<Products[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const items = Object.values(data[0].data);
        setProducts(items);

        function handleClickOutside(e: MouseEvent) {
            if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
    }, [])

    const sorted = [...products].sort((a, b) => {
        switch (sortBy) {
            case 'standard':
                return a.id - b.id;
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            default:
                return 0;
        }
    })

    const openSortMenu = () => {
        if(isOpen) {
            return setIsOpen(false);
        }
        setIsOpen(true);
    }

    const handleClick = (item:any) => {
        openSortMenu();
        setSortBy(item);
    }

    return(
        <div>
            <div className="flex bg-[#e7e1da] justify-center pt-30 px-5 md:pt-35 pb-15 md:pb-20">
                <div className="text-center w-180">
                    <h1 className="text-4xl text-[#444] pb-5">Våre produkter</h1>
                    <p className="text-md md:text-xl">Vi samarbeider med anerkjente leverandører av gravsteiner i forskjellige materialer, stiler og størrelser. Alle produkter kan tilpasses dine ønsker.</p>
                </div>
            </div>
            <div className="min-h-screen px-5 md:px-[15%] py-15">
                <div className="flex items-center gap-2 justify-end mb-5">
                    <p>Sorter etter:</p>
                    <button className="flex justify-between items-center rounded-[2] border border-neutral-300/50 py-2 px-5 w-50" onClick={openSortMenu}>
                        <p>{labels[sortBy]}</p>
                        <div className="flex items-center justify-center">
                            <img src="/arrow-down.svg" className="h-3 w-3" />
                        </div>
                    </button>
                    <div className="relative">
                        {isOpen && (
                            <div ref={menuRef} className="absolute z-9999 top-5 right-2 w-50 flex flex-col bg-white p-1 border border-neutral-400/50">
                            <button onClick={() => {
                                handleClick("standard");
                            }} className={`${sortBy === "standard" ? 'bg-[#e7e1da]' : null} hover:bg-[#e7e1da] flex p-2`}>
                                <div className="w-6 h-6 flex">
                                    {sortBy === "standard" ? <img src="/checkmark.svg" className="h-5 w-5" /> : null}
                                </div>
                                <p className="w-full text-left">Standard</p>
                            </button>
                            <button onClick={() => {
                                handleClick("price-asc");
                            }} className={`${sortBy === "price-asc" ? 'bg-[#e7e1da]' : null} hover:bg-[#e7e1da] flex p-2`}>
                                <div className="w-6 h-6 flex">
                                    {sortBy === "price-asc" ? <img src="/checkmark.svg" className="h-5 w-5" /> : null}
                                </div>
                                <p className="w-full text-left">Pris: Lav til høy</p>
                            </button>
                            <button onClick={() => {
                                handleClick("price-desc");
                            }} className={`${sortBy === "price-desc" ? 'bg-[#e7e1da]' : null} hover:bg-[#e7e1da] flex p-2`}>
                                <div className="w-6 h-6 flex">
                                    {sortBy === "price-desc" ? <img src="/checkmark.svg" className="h-5 w-5" /> : null}
                                </div>
                                <p className="w-full text-left">Pris: Høy til lav</p>
                            </button>
                        </div>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {sorted.map((p:any, i) => (
                        <div key={i} className="rounded-[2]">
                            <div className="md:h-100 flex flex-col justify-end border-neutral-300/50 bg-white overflow-hidden border">
                                <div className="flex justify-center items-center">
                                    <img src={p.img} className="w-80 hover:scale-103 transition duration-500" />
                                </div>
                            </div>
                            <div className="p-2 border border-neutral-300/50 bg-[#e7e1da]">
                                <h3 className="text-[#444] text-xl">{p.name}</h3>
                                <div className="flex justify-between items-center mt-3">
                                    <p className="font-bold">fra {p.price} kr</p>
                                    <p>{p.vendor}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}