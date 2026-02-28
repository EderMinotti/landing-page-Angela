import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCode } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="bg-emerald-950 p-4 text-base text-white text-center">
            <ul>
                <li className="flex items-center text-xs gap-3"><FaLocationDot/>R. Angelino Gardini, 90 - Matão, SP, 15995-298</li>
                <li className="flex items-center text-xs gap-3"><BsTelephoneFill/>(55) 16-99317-4694</li>
                <li className="flex items-center text-xs gap-3"><IoLogoWhatsapp/>(55) 16-99317-4694</li>
                <li className="flex items-center gap-3"><FaCode/>Desenvolvido por: Eder Minotti</li>         
            </ul>
           
        </footer>
    )
}