import React from "react";

import barbershopImg from "../../assets/barbershop.png"
import workshopImg from "../../assets/workshop.png"
import myMovieImg from "../../assets/mymovie.png"
import menuImg from "../../assets/menu.png"

export function Projects() {
    return (
        <div id="projects" className="bg-secondary h-[1320px] max-xl:h-[2200px] flex flex-col items-center justify-center space-y-20">
            <h2 className="text-white text-5xl max-lg:text-4xl">Projetos</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-20 max-xl:grid-cols-1">
                <div className="flex flex-col gap-2 max-sm:m-auto">
                    <p className="text-whitePrimary text-xl font-semibold">Landing page barbearia</p>
                    <div className="w-[600px] max-sm:w-[300px] h-[320px] max-sm:h-[300px] bg-primary bg-cover max-sm:bg-center border border-greenPrimary" style={{ backgroundImage: `url(${barbershopImg})` }}></div>
                    <div className="flex space-x-6 text-whitePrimary">
                        <a className="hover:text-white duration-200" target="_blank" href="https://eduardossoares.github.io/landingpage-barbearia/">Deploy</a>
                        <a className="hover:text-white duration-200" target="_blank" href="https://github.com/eduardossoares/landingpage-barbearia">Repositório</a>
                    </div>
                </div>

                <div className="flex flex-col gap-2 max-sm:m-auto">
                    <p className="text-whitePrimary text-xl font-semibold">Página de captura</p>
                    <div className="w-[600px] max-sm:w-[300px] h-[320px] max-sm:h-[300px] bg-primary bg-cover max-sm:bg-center border border-greenPrimary" style={{ backgroundImage: `url(${workshopImg})` }}></div>
                    <div className="flex space-x-6 text-whitePrimary">
                        <a className="hover:text-white duration-200" target="_blank" href="https://eduardossoares.github.io/pagina-de-captura-responsiva/">Deploy</a>
                        <a className="hover:text-white duration-200" target="_blank" href="https://github.com/eduardossoares/pagina-de-captura-responsiva">Repositório</a>
                    </div>
                </div>

                <div className="flex flex-col gap-2 max-sm:m-auto">
                    <p className="text-whitePrimary text-xl font-semibold">myMovie - Filmes em cartaz</p>
                    <div className="w-[600px] max-sm:w-[300px] h-[320px] max-sm:h-[300px] bg-primary bg-cover max-sm:bg-center border border-greenPrimary" style={{ backgroundImage: `url(${myMovieImg})` }}></div>
                    <div className="flex space-x-6 text-whitePrimary">
                        <a className="hover:text-white duration-200" target="_blank" href="https://eduardossoares.github.io/mymovie/">Deploy</a>
                        <a className="hover:text-white duration-200" target="_blank" href="https://github.com/eduardossoares/mymovie">Repositório</a>
                    </div>
                </div>

                <div className="flex flex-col gap-2 max-sm:m-auto">
                    <p className="text-whitePrimary text-xl font-semibold">Cardápio online</p>
                    <div className="w-[600px] max-sm:w-[300px] h-[320px] max-sm:h-[300px] bg-primary bg-cover max-sm:bg-center border border-greenPrimary" style={{ backgroundImage: `url(${menuImg})` }}></div>
                    <div className="flex space-x-6 text-whitePrimary">
                        <a className="hover:text-white duration-200" target="_blank" href="https://eduardossoares.github.io/menu-cardapio/">Deploy</a>
                        <a className="hover:text-white duration-200" target="_blank" href="https://github.com/eduardossoares/menu-cardapio">Repositório</a>
                    </div>
                </div>
            </div>
        </div>
    )
}