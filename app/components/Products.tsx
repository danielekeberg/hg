export default function Products() {
    return(
        <div className="px-[15%] flex flex-col gap-15">
            <div className="flex justify-center">
                <div className="w-150 text-center">
                    <h1 className="text-4xl text-[#444] mb-2">Våre produkter</h1>
                    <p>Vi tilbyr et bredt utvalg av gravsteiner i forskjellige materialer og stiler</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10">
                <div className="">
                    <div className="overflow-hidden">
                        <img src="/placeholder-1.jpg" className="rounded-[2] hover:scale-102 transition duration-500" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-[#444] text-xl mb-2">Tradisjonell gravstein</h1>
                        <p className="text-sm">Klassisk design i polert mørk granitt med elegant kurvet topp. Tidløs og verdig</p>
                    </div>
                </div>
                <div className="">
                    <div className="overflow-hidden">
                        <img src="/placeholder-2.jpg" className="rounded-[2] hover:scale-102 transition duration-500" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-[#444] text-xl mb-2">Tradisjonell gravstein</h1>
                        <p className="text-sm">Klassisk design i polert mørk granitt med elegant kurvet topp. Tidløs og verdig</p>
                    </div>
                </div>
                <div className="">
                    <div className="overflow-hidden">
                        <img src="/placeholder-3.jpg" className="rounded-[2] hover:scale-102 transition duration-500" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-[#444] text-xl mb-2">Tradisjonell gravstein</h1>
                        <p className="text-sm">Klassisk design i polert mørk granitt med elegant kurvet topp. Tidløs og verdig</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-stone-500 text-white py-2 px-5 rounded-[2] cursor-pointer hover:bg-stone-500/80">Se alle produkter</button>
            </div>
        </div>
    )
}