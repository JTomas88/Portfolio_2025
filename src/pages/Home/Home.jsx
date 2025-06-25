import React from "react";
import { useNavigate } from "react-router-dom";
import fotoPerfil from '../../assets/fotoPerfil.png'
import "./home.css";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen home_container text-center ">
            <div className="text-center">
                <h1 className="titulo" >Juan Tomás Poves</h1>
                <h3 className="subtitulo">Fullstack developer</h3>
            </div>
            <div className="flex justify-center">
                <div >
                    <img
                        src={fotoPerfil}
                        className="rounded-md m-4  mx-auto block fotoPerfil"
                        alt="Foto de perfil"
                    />
                    <p className="font-semibold text-black">

                        Apasionado desarrollador full stack con un sólido dominio de tecnologías como React, Python y SQL.<br />
                        Durante trabajos anteriores he adquirido habilidades de comunicación, resolución de problemas o escucha activa.<br />
                        Busco contribuir al desarrollo y éxito de proyectos que mejoren la vida de las personas. <br />
                        Autodidacta, comprometido con la excelencia y en constante aprendizaje, deseo aplicar mis conocimientos al desarrollo web.
                    </p>
                    <div className="flex flex-wrap justify-center gap-50 mt-15">
                        <button
                            type="button"
                            className="botones flex items-center justify-center"
                            onClick={() => navigate("/formacion")}
                        >
                            Formación / Cursos
                        </button>
                        <button type="button" className="botones flex items-center justify-center">
                            Experiencia Laboral
                        </button>
                        <button type="button" className="botones flex items-center justify-center">
                            Proyectos
                        </button>
                        <button type="button" className="botones flex items-center justify-center">
                            Tecnologías
                        </button>
                    </div>

                </div>

            </div>
        </div >
    );
};
