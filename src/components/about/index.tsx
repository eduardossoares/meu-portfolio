import React from "react"

export function About() {
    return (
        <section className="bg-secondary flex justify-center items-center h-[580px]" id="about">
            <div className="w-[974px] text-center space-y-4">
                <h2 className="text-white text-5xl max-lg:text-4xl">Quem sou?</h2>
                <article className="text-whitePrimary text-lg max-lg:w-[80%] max-lg:m-auto">Eu sou o Eduardo Soares, desenvolvedor frontend e
                    atualmente estou atuando como freelancer, criando interfaces modernas e de alta qualidade,
                    com ênfase em performance e responsividade.</article>
            </div>
        </section>
    )
}