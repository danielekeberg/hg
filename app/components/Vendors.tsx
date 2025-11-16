import Link from "next/link";

export default function Vendors() {
    return(
        <>
            <div className="px-5 md:px-[15%] pt-25 pb-5 md:pb-15 flex flex-col gap-15" id="vendors">
                <div className="flex justify-center">
                    <div className="w-140 text-center">
                        <h1 className="text-4xl text-[#444] mb-2">Våre produkter</h1>
                        <p>Vi tilbyr et bredt utvalg av gravsteiner i forskjellige materialer og stiler.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
                    <div className="rounded-[2]">
                        <div className="md:h-100 flex flex-col justify-end border-neutral-300/50 bg-white overflow-hidden border">
                            <div className="flex justify-center items-center">
                                <img src="https://eidestein.no/img/modeller/mod-750-jpg/375A.jpg" className="w-80 hover:scale-103 transition duration-500" />
                            </div>
                        </div>
                        <div className="p-2 border border-neutral-300/50 bg-[#e7e1da]">
                            <h3 className="text-[#444] text-xl">Modell 375a</h3>
                            <div className="flex justify-between items-center mt-3">
                                <p className="font-bold">fra 40500 kr</p>
                                <p>Eidestein.no</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[2]">
                        <div className="md:h-100 flex flex-col justify-end border-neutral-300/50 bg-white overflow-hidden border">
                            <div className="flex justify-center items-center">
                                <img src="https://eidestein.no/img/modeller/mod-750-jpg/366-B.jpg" className="w-80 hover:scale-103 transition duration-500" />
                            </div>
                        </div>
                        <div className="p-2 border border-neutral-300/50 bg-[#e7e1da]">
                            <h3 className="text-[#444] text-xl">Modell 366b</h3>
                            <div className="flex justify-between items-center mt-3">
                                <p className="font-bold">fra 29700 kr</p>
                                <p>Eidestein.no</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[2]">
                        <div className="md:h-100 flex flex-col justify-end border-neutral-300/50 bg-white overflow-hidden border">
                            <div className="flex justify-center items-center">
                                <img src="https://www.nergaard.no/uploads/_CGSmartImage/img-9e38aa4cd3c92622cc5ebb0e7bd6741f" className="w-80 hover:scale-103 transition duration-500" />
                            </div>
                        </div>
                        <div className="p-2 border border-neutral-300/50 bg-[#e7e1da]">
                            <h3 className="text-[#444] text-xl">Modell 430</h3>
                            <div className="flex justify-between items-center mt-3">
                                <p className="font-bold">fra 34500 kr</p>
                                <p>Nergaard.no</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[2]">
                        <div className="md:h-100 flex flex-col justify-end border-neutral-300/50 bg-white overflow-hidden border">
                            <div className="flex justify-center items-center">
                                <img src="https://www.nergaard.no/uploads/_CGSmartImage/img-dce4bfc538208d4662d8957595df1536" className="w-80 hover:scale-103 transition duration-500" />
                            </div>
                        </div>
                        <div className="p-2 border border-neutral-300/50 bg-[#e7e1da]">
                            <h3 className="text-[#444] text-xl">Modell 454</h3>
                            <div className="flex justify-between items-center mt-3">
                                <p className="font-bold">fra 25000 kr</p>
                                <p>Nergaard.no</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-center">
                        <Link href="../produkter/" className="bg-stone-500 text-white py-2 px-5 rounded-[2] cursor-pointer hover:bg-stone-500/80">Se alle produkter</Link>
                    </div>
                </div>
                <div className="text-center">
                    <p>Hadeland Gravstein utfører alle typer arbeider på eksisterende gravminner - fra tilleggsinskripsjoner og oppretting til rengjøring, oppussing og vedlikehold.</p>
                    <p>Vi legger stor vekt på nøyaktighet og respekt for det opprinnelige uttrykket, slik at steinen bevares i sin fulle verdighet gjennom tidens løp.</p>
                </div>
            </div>
            <div className="bg-[#e7e1da] py-15 mt-15 md:mt-0">
                <div className="text-center mb-10">
                    <h1 className="text-4xl text-[#444] mb-2">Våre leverandører</h1>
                    <p>Vi samarbeider med kvalitetsleverandører av gravsteiner i forskjellige materialer og stiler.</p>
                </div>
                <div className="flex justify-center">
                    <div className="p-2 grid grid-cols-1 gap-5 md:gap-50 md:grid-cols-2">
                        <div className="flex justify-center border border-neutral-300/50">
                            <img src="https://eidestein.no/img/Eide-Stein-Logo-meny.jpg" className="h-20" />
                        </div>
                        <div className="flex justify-center border border-neutral-300/50">
                            <img src="https://www.begravelsesbyraer.no/wp-content/uploads/2024/12/nergard-600x198.png" className="h-20" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}