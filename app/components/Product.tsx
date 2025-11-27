'use client';
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "@/app/components/Loader";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

type Addon = {
    name: string;
    price: number;
}

type Product = {
    name: string;
    id: number;
    price: number;
    img: string;
    vendor: string;
    customId: string;
    addons: Addon[];
}

export default function Product() {
    const params = useParams();
    const { id } = params;
    const [product, setProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchStone() {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from("gravstein")
                    .select("*")
                    .eq("customId", id)
                if(error) {
                    console.error("Error fetching stone:", error);
                    return;
                }
                const stone = (data || []) as Product[];
                console.log(stone);
                setProduct(stone);
            } catch(err) {
                console.error("Error fetching stones:", err)
            } finally {
                setLoading(false);
            }
        }
        fetchStone();
    },[id])

    const formatNumber = (value:number) => new Intl.NumberFormat("no-NO").format(value);

    return(
        <div className="px-5 md:px-[15%] my-25 md:mt-50 min-h-[70vh]">
            {loading && (
                <Loader />
            )}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                        <img className="max-h-150" src={product[0]?.img} />
                        <div>
                            <div className="py-2 border-b border-neutral-300">
                                <h1 className="text-4xl text-[#444]">{product[0]?.name}</h1>
                                <h3 className="text-2xl mt-3">fra {formatNumber(product[0]?.price ? product[0]?.price : 0)} kr</h3>
                            </div>
                            <table className="w-full text-left mt-5">
                                <thead>
                                    <tr className="grid grid-cols-2">
                                        <th className="p-2 text-[#444] bg-neutral-200">Tillegg</th>
                                        <th className="p-2 text-[#444] text-right bg-neutral-200">Pris</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product[0]?.addons &&
                                        product[0].addons.sort((a, b) => a.name.localeCompare(b.name)).map((a, i) => (
                                            <tr key={i} className="grid grid-cols-2">
                                                <td className={`p-2 ${i % 2 === 0 ? 'bg-neutral-100' : 'bg-neutral-200'}`}>{a.name}</td>
                                                <td className={`p-2 text-right ${i % 2 === 0 ? 'bg-neutral-100' : 'bg-neutral-200'}`}>{formatNumber(a.price)} kr</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </div>
    )
}