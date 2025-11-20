export default function Contact() {
    return(
        <div className="pt-10 md:pt-15">
            <div className="bg-[#e7e1da] flex justify-center py-15">
                <div className="text-center">
                    <h1 className="text-4xl text-[#444] mb-5">Kontakt oss</h1>
                    <p>Vi er her for å hjelpe deg. Ta kontakt for en uforpliktende samtale.</p>
                </div>
            </div>
            <div className="flex justify-center gap-20 px-5 md:px-[15%] py-15 text-[#444]">
                <div className="w-100">
                    <h1 className="text-2xl mb-10">Kontaktinformasjon</h1>
                    <div className="flex flex-col gap-9">
                        <div className="flex gap-2">
                            <img src="/phone.svg" className="h-7 w-7" />
                            <div>
                                <p className="font-bold">Telefon</p>
                                <p className="text-[#777]">+47 61 33 20 30</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src="/email.svg" className="h-7 w-7" />
                            <div>
                                <p className="font-bold">E-post</p>
                                <p className="text-[#777]">haavard.ekeberg@jolstad.no</p>
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
                                <p className="text-[#777]">Mandag - Fredag: 10:00 - 15:00</p>
                                <p className="text-[#777]">(Eller etter avtale)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}