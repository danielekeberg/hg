export default function Hero() {
    return(
        <div className="relative h-[600px] flex items-center jusitfy-center overflow-hidden">
            <div className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/hero.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-white/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/20 to-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/45" />
                </div>
            </div>
            <div className="flex flex-col z-10 h-full pl-[15%] items-center justify-center">
                <div className="text-left w-full mb-8">
                    <div className="flex flex-col gap-0">
                        <h1 className="text-2xl md:text-5xl text-white font-extrabold mb-3">Kvalitetsgravsteiner</h1>
                        <h1 className="text-2xl md:text-5xl text-white font-extrabold mb-3">med omtanke</h1>
                    </div>
                    <div className="flex flex-col gap-0">
                        <p className="text-md md:text-xl text-white">Vi skaper varige minnesmerker med håndverkstradisjon og respekt</p>
                        <p className="text-md md:text-xl text-white">for hver enkelt historie.</p>
                    </div>
                    <div className="flex gap-5 mt-10">
                        <button className="bg-[#ededed] py-2 px-5 rounded-[2] border border-neutral-200 cursor-pointer hover:bg-neutral-300 text-[#444]">Se våre produkter</button>
                        <button className="bg-[#ededed] py-2 px-5 rounded-[2] border border-neutral-200 cursor-pointer hover:bg-neutral-300 text-[#444]">Kontakt oss</button>
                    </div>
                </div>
            </div>
        </div>
    )
}