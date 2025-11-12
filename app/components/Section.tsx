export default function Section() {
    return(
        <div className="mt-15 flex flex-col gap-15">
            <section className="flex justify-center">
                <div className="w-150 text-center px-5">
                    <h1 className="text-3xl md:text-4xl text-[#444] mb-2">Vi er her for å hjelpe deg</h1>
                    <p>Hadeland Gravstein har lang tradisjon i å skape varige minnesmerker. Vi kombinerer tradisjonelt håndverk med moderne design, og arbeider nært med deg for å skape en gravstein som hedrer dine kjære på best mulig måte.</p>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#e7e1da] px-[15%] py-20">
                <div className="text-center">
                    <div className="flex justify-center items-center">
                        <div className="h-15 w-15 rounded-full bg-[#d6cbbf] mb-5 flex justify-center items-center">
                            <img src="/heart.svg" className="h-10 w-10" />
                        </div>
                    </div>
                    <h1 className="text-2xl text-[#444]">Omtanke</h1>
                    <p>Vi forstår hvor viktig denne prosessen er, og behandler hvert oppdrag med respekt og empati.</p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center items-center">
                        <div className="h-15 w-15 rounded-full bg-[#d6cbbf] mb-5 flex justify-center items-center">
                            <img src="/shield.svg" className="h-10 w-10" />
                        </div>
                    </div>
                    <h1 className="text-2xl text-[#444]">Kvalitet</h1>
                    <p>Vi forstår hvor viktig denne prosessen er, og behandler hvert oppdrag med respekt og empati.</p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center items-center">
                        <div className="h-15 w-15 rounded-full bg-[#d6cbbf] mb-5 flex justify-center items-center">
                            <img src="/hammer.svg" className="h-10 w-10" />
                        </div>
                    </div>
                    <h1 className="text-2xl text-[#444]">Håndverk</h1>
                    <p>Vi forstår hvor viktig denne prosessen er, og behandler hvert oppdrag med respekt og empati.</p>
                </div>
            </section>
        </div>
    )
}