import React from "react";
import "../Footer/footer.css";
import Logo2a from '../../assets/Logo2a.png';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
    return (
        <footer className="footer w-full flex flex-col items-center bg-black text-white p-4 gap-4 text-center">
            <aside className="flex flex-col items-center gap-3">
                <img
                    className="w-16 h-auto"
                    src={Logo2a}
                    alt="Logo"
                />
                <p className="text-sm">Juan Tomás Poves Hortelano</p>

                <nav className="flex justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/jtomas88/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition"
                    >
                        <CiLinkedin color="white" size={24} />
                    </a>
                    <a
                        href="https://github.com/JTomas88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition"
                    >
                        <FaGithub color="white" size={24} />
                    </a>
                    <a
                        href="mailto:juan.tomas88@hotmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition"
                    >
                        <MdOutlineEmail color="white" size={24} />
                    </a>
                </nav>
            </aside>
        </footer>


    );
};
