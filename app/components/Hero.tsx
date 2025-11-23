'use client';
import Link from "next/link";

export default function Hero() {
    return(
        <div className="relative h-screen md:h-[600px] flex items-center jusitfy-center overflow-hidden" id="top">
            <div className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(https://www.kirken.no/globalassets/fellesrad/gran/bilder/kirkebygg/moen-kirke/moen%20kirke_nymalt%20sommer%202022%20med%20solsikker%20knut%20b%C3%B8e.jpg?width=1600&height=896&quality=80&contId=7251162)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                }}>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-white/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/25" />
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
                        <Link href="../produkter/" className="text-center bg-[#ededed] py-2 px-5 rounded-[2] border border-neutral-200 cursor-pointer hover:bg-neutral-300 text-[#444]">Se våre produkter</Link>
                        <Link href="../kontakt/" className="text-center bg-[#ededed] py-2 px-5 rounded-[2] border border-neutral-200 cursor-pointer hover:bg-neutral-300 text-[#444]">Kontakt oss</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}