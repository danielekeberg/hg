'use client';
import Link from "next/link";

export default function Hero() {
    const scrollToVendor = () => {
        document.getElementById('vendors')?.scrollIntoView({ behavior: 'smooth' });
    }
    return(
        <div className="relative h-[600px] flex items-center jusitfy-center overflow-hidden">
            <div className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(https://www.gravplass.no/contentassets/3a9c064a4ed64f1199f1d9da7dbf186f/norderhov%20kirkeg%C3%A5rd%20foto%20gro%20e.%20h%C3%A5kenrud.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                }}>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-white/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/20 to-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/45" />
                </div>
            </div>
            <div className="flex flex-col z-10 h-full px-5 md:px-[15%] items-center justify-center">
                <div className="text-left w-full mb-8">
                    <div className="flex flex-col gap-0">
                        <h1 className="text-4xl md:text-5xl text-white font-extrabold mb-3">Kvalitetsgravsteiner</h1>
                        <h1 className="text-4xl md:text-5xl text-white font-extrabold mb-3">med omtanke</h1>
                    </div>
                    <div className="flex flex-col gap-0">
                        <p className="text-md md:text-xl text-white">Vi skaper varige minnesmerker med håndverkstradisjon og respekt</p>
                        <p className="text-md md:text-xl text-white">for hver enkelt historie.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        <button onClick={scrollToVendor} className="bg-[#ededed] py-2 px-5 rounded-[2] border border-neutral-200 cursor-pointer hover:bg-neutral-300 text-[#444]">Se våre leverandører</button>
                        <Link href="../contact/" className="text-center bg-[#ededed] py-2 px-5 rounded-[2] border border-neutral-200 cursor-pointer hover:bg-neutral-300 text-[#444]">Kontakt oss</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}