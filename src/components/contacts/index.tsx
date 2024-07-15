import React from "react";
import { faGithub, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Contacts() {
    return (
        <div id="contacts" className="bg-primary h-[400px] flex flex-col items-center justify-center space-y-14 text-center">
            <div className="space-y-4">
                <h2 className="text-white text-5xl max-lg:text-4xl">Contatos</h2>
                <p className="text-whitePrimary max-md:w-[80%] m-auto">Gostaria de tirar dúvidas ou fazer algum orçamento? Estou a sua disposição. <br /> Entre em contato comigo abaixo!</p>
            </div>
            <div className="flex gap-8">
                <a href="https://wa.link/yzql9s" target="_blank" className="text-5xl hover:scale-110 duration-200"><FontAwesomeIcon icon={faWhatsapp} style={{ color: "#2BFF7F" }} /></a>
                <a href="https://www.linkedin.com/in/eduardo-da-silva-soares/" target="_blank" className="text-5xl hover:scale-110 duration-200"><FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#2BA6FF" }} /></a>
                <a href="https://github.com/eduardossoares" target="_blank" className="text-5xl hover:scale-110 duration-200"><FontAwesomeIcon icon={faGithub} style={{ color: "#64568B" }} /></a>
            </div>
        </div>
    )
}