export default function Vendors() {
    return(
        <div className="px-5 md:px-[15%] pt-25 flex flex-col gap-15 min-h-screen" id="vendors">
            <div className="flex justify-center">
                <div className="w-140 text-center">
                    <h1 className="text-4xl text-[#444] mb-2">Våre leverandører</h1>
                    <p>Vi samarbeider med kvalitetsleverandører av gravsteiner i forskjellige materialer og stiler</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <div className="overflow-hidden bg-white min-h-100 flex items-end border border-neutral-300 rounded-[2]">
                        <img src="https://eidestein.no/img/modeller/mod-750-jpg/375A.jpg" className="hover:scale-102 transition duration-500" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-[#444] text-xl mb-2">Tradisjonell gravstein</h1>
                        <p className="text-sm">Klassisk design i polert mørk granitt med elegant kurvet topp. Tidløs og verdig</p>
                    </div>
                </div>
                <div>
                    <div className="overflow-hidden bg-white min-h-100 flex items-end border border-neutral-300 rounded-[2]">
                        <img src="https://eidestein.no/img/modeller/mod-750-jpg/366-B.jpg" className="hover:scale-102 transition duration-500" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-[#444] text-xl mb-2">Tradisjonell gravstein</h1>
                        <p className="text-sm">Klassisk design i polert mørk granitt med elegant kurvet topp. Tidløs og verdig</p>
                    </div>
                </div>
                <div>
                    <div className="overflow-hidden bg-white min-h-100 flex items-end border border-neutral-300 rounded-[2]">
                        <img src="https://www.nergaard.no/uploads/_CGSmartImage/img-9e38aa4cd3c92622cc5ebb0e7bd6741f" className="hover:scale-102 transition duration-500" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-[#444] text-xl mb-2">Tradisjonell gravstein</h1>
                        <p className="text-sm">Klassisk design i polert mørk granitt med elegant kurvet topp. Tidløs og verdig</p>
                    </div>
                </div>
                <div>
                    <div className="overflow-hidden bg-white min-h-100 flex items-end border border-neutral-300 rounded-[2]">
                        <img src="https://www.nergaard.no/uploads/_CGSmartImage/img-dce4bfc538208d4662d8957595df1536" className="hover:scale-102 transition duration-500" />
                    </div>
                    <div className="p-2">
                        <h1 className="text-[#444] text-xl mb-2">Tradisjonell gravstein</h1>
                        <p className="text-sm">Klassisk design i polert mørk granitt med elegant kurvet topp. Tidløs og verdig</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-10">
                    <div className="flex justify-center">
                        <a href="https://www.eidestein.no" target="_blank" className="bg-stone-500 text-white py-2 px-5 rounded-[2] cursor-pointer hover:bg-stone-500/80">Eidestein.no</a>
                    </div>
                    <div className="flex justify-center">
                        <a href="https://www.nergaard.no" target="_blank" className="bg-stone-500 text-white py-2 px-5 rounded-[2] cursor-pointer hover:bg-stone-500/80">Nergaard.no</a>
                    </div>
                </div>
            </div>
        </div>
    )
}