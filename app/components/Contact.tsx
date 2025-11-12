'use client';
import { useState } from "react";

export default function Contact() {
    const [showToast, setShowToast] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setIsError(false);
        const form = e.target;
        const data = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/xovyqgwz", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if(res.ok) {
                form.reset();
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
            } else {
                setIsError(true);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000)
            }
        } catch {
            setIsError(true);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    }
    return(
        <div>
            <div className="pt-35 pb-15 flex justify-center bg-[#e7e1da]">
                <div className="text-center">
                    <h1 className="text-4xl text-[#444]">Kontakt oss</h1>
                    <p>Vi er her for å hjelpe deg. Ta kontakt for en uforpliktende samtale.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-5 md:px-[15%] py-15 text-[#444]">
                <div>
                    <h1 className="text-2xl mb-5">Send oss en melding</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <label className="text-sm font-bold">Navn</label>
                            <input name="Navn" type="text" className="border border-neutral-400/50 p-2 rounded-[2]" required />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold">E-post</label>
                            <input name="Epost" type="email" className="border border-neutral-400/50 p-2 rounded-[2]" required />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold">Telefon</label>
                            <input name="Telefon" type="tel" className="border border-neutral-400/50 p-2 rounded-[2]" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold">Melding</label>
                            <textarea name="Melding" className="border border-neutral-400/50 p-2 rounded-[2] resize-none h-30" />
                        </div>
                        <button type="submit" className="bg-stone-500 text-white p-2 rounded-[2] cursor-pointer hover:bg-stone-500/80">Send melding</button>
                    </form>
                    {showToast && (
                        <div className={`fixed bottom-5 right-5 py-2 px-5 rounded-[2] shadow-sm transition-opacity duration-300 ${isError ? "bg-red-600 text-white" : "bg-stone-500 text-white"}`}>
                            {isError ? "Noe gikk galt. Prøv igjen" : "Meldingen er sendt"}
                        </div>
                    )}
                </div>
                <div>
                    <h1 className="text-2xl mb-10">Kontaktinformasjon</h1>
                    <div className="flex flex-col gap-9">
                        <div className="flex gap-2">
                            <img src="/phone.svg" className="h-7 w-7" />
                            <div>
                                <p className="font-bold">Telefon</p>
                                <p className="text-[#777]">+47 123 45 679</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src="/email.svg" className="h-7 w-7" />
                            <div>
                                <p className="font-bold">E-post</p>
                                <p className="text-[#777]">post@hadelandgravstein.no</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src="/location.svg" className="h-7 w-7" />
                            <div>
                                <p className="font-bold">Adresse</p>
                                <p className="text-[#777]">Mohagalia 3</p>
                                <p className="text-[#777]">2770 Jaren</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src="/clock.svg" className="h-7 w-7" />
                            <div>
                                <p className="font-bold">Åpningstider</p>
                                <p className="text-[#777]">Mandag - Fredag: 09:00 - 16:00</p>
                                <p className="text-[#777]">Lørdag: 10:00 - 14:00</p>
                                <p className="text-[#777]">Søndag: Stengt</p>
                                <p className="text-[#777] text-sm">Eller etter avtale</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}