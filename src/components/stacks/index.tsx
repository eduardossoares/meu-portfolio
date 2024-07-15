import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faFigma, faHtml5, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import tailwindImage from '../../assets/tailwind.png';

export function Stacks() {
    return (
        <section id="stacks" className="bg-primary flex flex-col justify-center items-center h-[720px] gap-12">
            <h2 className="text-white text-5xl max-lg:text-4xl">Conhecimentos</h2>
            <ul className="grid grid-cols-4 grid-flow-row gap-4 items-center max-md:grid-cols-2">

                <li className="bg-secondary text-7xl flex justify-center items-center w-28 h-28 hover:scale-110 
                duration-200 border border-greenPrimary">
                    <FontAwesomeIcon icon={faHtml5} style={{ color: "#2BFF7F" }} />
                </li>

                <li className="bg-secondary text-7xl flex justify-center items-center w-28 h-28 hover:scale-110 
                duration-200 border border-greenPrimary">
                    <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#2BFF7F" }} />
                </li>

                <li className="bg-secondary text-7xl flex justify-center items-center w-28 h-28 hover:scale-110 
                duration-200 border border-greenPrimary">
                    <FontAwesomeIcon icon={faReact} style={{ color: "#2BFF7F" }} />
                </li>

                <li className="bg-secondary text-7xl flex justify-center items-center w-28 h-28 hover:scale-110 
                duration-200 border border-greenPrimary">
                    <FontAwesomeIcon icon={faFigma} style={{ color: "#2BFF7F" }} />
                </li>

                <li className="bg-secondary flex justify-center items-center w-28 h-28 hover:scale-110 
                duration-200 border border-greenPrimary">
                    <img src={tailwindImage} alt="Tailwind" />
                </li>

                <li className="bg-secondary font-extrabold text-greenPrimary text-6xl border border-greenPrimary
                flex justify-center items-center w-28 h-28 hover:scale-110 duration-200">
                    TS
                </li>

                <li className="bg-secondary font-extrabold text-greenPrimary text-6xl border border-greenPrimary
                flex justify-center items-center w-28 h-28 hover:scale-110 duration-200">
                    JS
                </li>

                <li className="bg-secondary text-7xl flex justify-center items-center w-28 h-28 hover:scale-110 
                duration-200 border border-greenPrimary ">
                    <FontAwesomeIcon icon={faSass} style={{ color: "#2BFF7F" }} />
                </li>

            </ul>
        </section>
    )
}