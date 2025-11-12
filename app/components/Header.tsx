export default function Header() {
    return(
        <div className="fixed top-0 z-9999 bg-[#fbfaf9] w-full flex justify-between px-[15%] py-5 shadow-sm">
            <h1 className="text-2xl text-[#444]">Hadeland Gravstein</h1>
            <div className="flex gap-10">
                <p className="text-[#444] cursor-pointer">Hjem</p>
                <p className="hover:text-[#444] cursor-pointer">Om oss</p>
                <p className="hover:text-[#444] cursor-pointer">Produkter</p>
                <p className="hover:text-[#444] cursor-pointer">Kontakt</p>
            </div>
        </div>
    )
}