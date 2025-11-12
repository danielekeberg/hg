export default function Footer() {
    const now = new Date();
    const year = now.getFullYear();
    return(
        <div className="px-5 md:px-[15%] bg-[#e7e1da] pt-15 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#444] text-xl">Hadeland Gravstein</h3>
                    <p className="text-sm">Vi leverer håndverksbaserte gravsteiner og minnesteiner av høyeste kvalitet. Med lang erfaring og lokal tilhørighet er vi her for å hjelpe deg</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#444] text-xl">Kontakt</h3>
                    <div className="flex gap-2">
                        <img src="/phone.svg" className="w-5 h-5" />
                        <p className="text-sm">+47 123 45 678</p>
                    </div>
                    <div className="flex gap-2">
                        <img src="/email.svg" className="w-5 h-5" />
                        <p className="text-sm">post@hadelandgravstein.no</p>
                    </div>
                    <div className="flex gap-2">
                        <img src="/location.svg" className="w-5 h-5" />
                        <p className="text-sm">Mohagalia 3, 2770 Jaren</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#444] text-xl">Åpningstider</h3>
                    <p className="text-sm">Mandag - Fredag: 09:00 - 16:00</p>
                    <p className="text-sm">Lørdag: 10:00 - 14:00</p>
                    <p className="text-sm">Søndag: Stengt</p>
                    <p className="text-sm">Eller etter avtale</p>
                </div>
                
            </div>
            <div className="flex justify-center mt-15">
                <p className="text-sm">&copy; {year} Hadeland Gravstein. Alle rettigheter reservert.</p>
            </div>
        </div>
    )
}