export default function ContactCart() {
    return(
        <div className="bg-stone-500 mt-20 text-white px-5 py-15 flex justify-center">
            <div className="w-150 text-center flex flex-col gap-5">
                <h1 className="text-4xl">La oss hjelpe deg</h1>
                <p>Ta kontakt for en uforpliktende samtale. Vi er her for å veilede deg gjennom hele prosessen.</p>
                <div>
                    <button className="bg-[#e7e1da] hover:bg-[#e7e1da]/80 py-2 px-5 text-[#444] rounded-[2] cursor-pointer">Kontakt oss i dag</button>
                </div>
            </div>
        </div>
    )
}