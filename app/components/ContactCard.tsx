import Link from "next/link";
export default function ContactCart() {
    return(
        <div className="bg-stone-500 text-white px-5 py-15 flex justify-center">
            <div className="w-100 text-center flex flex-col gap-5">
                <h1 className="text-4xl">La oss hjelpe deg</h1>
                <p>Ta kontakt for en uforpliktende samtale. Vi er her for å veilede deg gjennom hele prosessen.</p>
                <div>
                    <Link href="../kontakt/" className="py-2 px-5 rounded-[2] bg-[#e7e1da] text-[#444] hover:bg-[#e7e1da]/80">Kontakt oss i dag</Link>
                </div>
            </div>
        </div>
    )
}