import React from "react";

export function Home() {
    return (
        <section id="home" className="h-screen bg-primary flex items-center justify-center">
            <p className="text-6xl max-md:text-4xl max-xl:max-w-[500px] max-md:max-w-[300px] max-sm:max-w-[240px] text-white">&lt;Construindo o Futuro <br />
                com <span className="text-greenPrimary">Modernidade</span> e
                <span className="text-greenPrimary"> Qualidade. </span>/&gt;
            </p>
        </section>
    )
}