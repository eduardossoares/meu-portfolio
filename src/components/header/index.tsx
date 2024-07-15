import React from "react";

export function Header() {
    return (
        <div>
            <header className="bg-primary h-24 flex justify-center items-center fixed w-full max-md:invisible">
                <div className="text-whitePrimary space-x-20 max-xl:space-x-6
                 text-xl max-xl:text-lg font-semibold">
                    <a className="hover:text-zinc-200 duration-200 p-4" href="#home">Home</a>
                    <a className="hover:text-zinc-200 duration-200 p-4" href="#about">Sobre mim</a>
                    <a className="hover:text-zinc-200 duration-200 p-4" href="#stacks">Conhecimentos</a>
                    <a className="hover:text-zinc-200 duration-200 p-4" href="#projects">Projetos</a>
                    <a className="hover:text-zinc-200 duration-200 p-4" href="#contacts">Contatos</a>
                </div>
            </header>
        </div>
    )
}