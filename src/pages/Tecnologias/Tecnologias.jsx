import React from "react";
import { useNavigate } from "react-router-dom";
import "./tecnologias.css";
import Navbar from "../../components/Navbar/Navbar";

import { FaHtml5, FaReact, FaBootstrap, FaPython, FaMarkdown, FaGithubSquare } from "react-icons/fa";
import { MdCss, MdHttp } from "react-icons/md";
import { IoLogoJavascript, IoCodeSlash, IoLogoSass, IoPeople } from "react-icons/io5";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { SiJsonwebtokens, SiFlask, SiMysql, SiCloudinary } from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";
import { LuFileCode2 } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";


export default function Tecnologias() {
    return (

        <div className="w-full min-h-screen text-center tecnologias_container">
            <div className="cajon_navbar">
                <Navbar />
            </div>
            <div className="m-3">
                <div className="text-6xl font-bold titulo_tecnologias text-center">
                    TECNOLOGÍAS
                </div>
            </div>

            {/* Agrupación en 3 columnas */}
            <div className="tecnologias-grid">
                {/* FRONTEND */}
                <div className="tecnologia-col">
                    <h2>Frontend</h2>
                    <div className="row justify-center">
                        <div className="col">
                            <div className="icon-item"><FaHtml5 size={40} /><p>HTML5</p></div>
                            <div className="icon-item"><MdCss size={40} /><p>CSS</p></div>
                            <div className="icon-item"><IoLogoJavascript size={40} /><p>Javascript</p></div>
                        </div>
                        <div className="col">
                            <div className="icon-item"><FaReact size={40} /><p>React</p></div>
                            <div className="icon-item"><IoCodeSlash size={40} /><p>Flux</p></div>
                            <div className="icon-item"><PiBracketsCurlyBold size={40} /><p>ECMAScript 2023</p></div>
                        </div>
                        <div className="col">
                            <div className="icon-item"><FaBootstrap size={40} /><p>Bootstrap</p></div>
                            <div className="icon-item"><IoLogoSass size={40} /><p>Sass</p></div>
                            <div className="icon-item"><SiJsonwebtokens size={40} /><p>JWT</p></div>
                        </div>
                        <div className="col">
                            <div className="icon-item"><FaAngular size={40} /><p>Angular</p></div>

                        </div>
                    </div>
                </div>

                {/* BACKEND */}
                <div className="tecnologia-col">
                    <h2>Backend</h2>
                    <div className="row justify-center">
                        <div className="col">
                            <div className="icon-item"><FaPython size={40} /><p>Python</p></div>
                            <div className="icon-item"><SiFlask size={40} /><p>Flask</p></div>
                            <div className="icon-item"><TbApi size={40} /><p>APIs</p></div>
                        </div>
                        <div className="col">
                            <div className="icon-item"><TbSql size={40} /><p>SQL</p></div>
                            <div className="icon-item"><SiMysql size={40} /><p>MySQL</p></div>
                            <div className="icon-item"><LuFileCode2 size={40} /><p>Pascal</p></div>
                        </div>


                    </div>
                </div>

                {/* OTRAS */}
                <div className="tecnologia-col">
                    <h2>Otras</h2>
                    <div className="row justify-center">
                        <div className="col">
                            <div className="icon-item"><FaMarkdown size={40} /><p>Markdown</p></div>
                            <div className="icon-item"><IoPeople size={40} /><p>User Stories</p></div>
                            <div className="icon-item"><MdHttp size={40} /><p>REST</p></div>
                        </div>
                        <div className="col">
                            <div className="icon-item"><FaLaptopCode size={40} /><p>DOM</p></div>
                            <div className="icon-item"><FaGithubSquare size={40} /><p>GIT</p></div>
                            <div className="icon-item"><SiCloudinary size={40} /><p>Cloudinary</p></div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

