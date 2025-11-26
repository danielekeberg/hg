'use client';
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import Loader from "@/app/components/Loader";
import { supabase } from "@/lib/supabaseClient";

type Products = {
    name: string,
    id: number;
    price: number,
    img: string
    vendor: string;
}

function interleaveByTwo(a: Products[] = [], b: Products[] = []) {
    const result: (Products & { supplier: string })[] = [];
    let i = 0;
    let j = 0;
    while (i < a.length || j < b.length) {
        for (let k = 0; k < 2 && i < a.length; k++) {
            result.push({ ...a[i], supplier: "Eidestein.no" });
            i++;
        }
        for (let k = 0; k < 2 && j < b.length; k++) {
            result.push({ ...b[j], supplier: "Nergaard.no" });
            j++;
        }
    }
    return result;
}

export default function Products() {
    const BATCH_SIZE = 12;

    const [sortBy, setSortBy] = useState<'standard' | 'price-asc' | 'price-desc'>("standard");
    const labels: Record<'standard' | 'price-asc' | 'price-desc', any> = {
        standard: "Standard",
        "price-asc": "Pris: Lav til høy",
        "price-desc": "Pris: Høy til lav",
    }
    const [products, setProducts] = useState<Products[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [hasMore, setHasMore] = useState(true);
    const [display, setDisplay] = useState(BATCH_SIZE);
    const [isLoading, setIsLoading] = useState(true);
    const sentinelRef = useRef(null);

    useEffect(() => {
        const fetchStones = async () => {
            try {
                setIsLoading(true);
                const { data: rows, error } = await supabase
                    .from("gravstein")
                    .select("*")
                if (error) {
                    console.error("Error fetching stones:", error);
                    return;
                }
                const items = (rows ?? []) as Products[];
                const supplierA = items.filter(p => p.vendor === "Eidestein.no");
                const supplierB = items.filter(p => p.vendor === "Nergaard.no");
                const mixed = interleaveByTwo(supplierA, supplierB);
                console.log(items)
                setProducts(mixed);
                setDisplay(BATCH_SIZE);
                setHasMore(true);
            } catch (err) {
                console.error("Unexpected error fetching stones:", err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchStones();
        function handleClickOutside(e: MouseEvent) {
            if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [sortBy])

    const sorted = useMemo(() => {
        switch (sortBy) {
            case 'price-asc':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price-desc':
                return [...products].sort((a, b) => b.price - a.price);
            case 'standard':
            default:
                return products;
        }
    }, [sortBy, products]);

    const showing = sorted.slice(0, display);

    const openSortMenu = () => setIsOpen(prev => !prev);

    const handleClick = (item: 'standard' | 'price-asc' | 'price-desc') => {
        setSortBy(item);
        setIsOpen(false);
    }

    const formatNumber = (value:number) => new Intl.NumberFormat("no-NO").format(value);

    const showMore = useCallback(() => {
        if (display >= products.length) {
            setHasMore(false);
            return;
        }
        setDisplay(prev => Math.min(prev + BATCH_SIZE, sorted.length));
    }, [display, sorted.length]);

    useEffect(() => {
        if(!sentinelRef.current) return;
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                showMore();
            }
        },
        {
            root: null,
            rootMargin: "200px",
            threshold: 0,
        }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
    }, [showMore, hasMore])

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
                    <button className="flex justify-between items-center rounded-[2] border border-neutral-300/80 py-2 px-5 w-50" onClick={openSortMenu}>
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
                {isLoading && (
                    <Loader />
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {showing.map((p:any, i) => (
                        <Link href={`../produkt/${p.customId}`} key={i} className="rounded-[2]">
                            <div className="flex flex-col justify-end border-neutral-300/50 bg-white overflow-hidden border">
                                <div className="flex min-h-50 aspect-square justify-center items-center">
                                    <img src={p.img} className="w-full h-full object-contain hover:scale-103 transition duration-500" />
                                </div>
                            </div>
                            <div className="p-2 border border-neutral-300/50 bg-[#e7e1da]">
                                <h3 className="text-[#444] text-xl">{p.name}</h3>
                                <div className="flex justify-between items-center mt-3">
                                    <p className="font-bold">fra {formatNumber(p.price)} kr</p>
                                    <p>{p.vendor}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {hasMore && <div ref={sentinelRef} className="h-px w-full" />}
            </div>
        </div>
    )
}