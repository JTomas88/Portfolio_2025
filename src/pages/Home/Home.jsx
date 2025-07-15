
import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import fotoPerfil from '../../assets/fotoPerfil.png'
import "./home.css";

export default function Home() {
    const navigate = useNavigate();


    return (
        <div className="w-full min-h-screen home_container text-center py-8 px-4 flex flex-col items-center">
            <main className="w-full max-w-5xl mt-10 flex flex-col items-center gap-6">
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
                        <div className="flex flex-wrap justify-center items-center gap-10 mt-8 mb-12 overflow-x-auto botones-wrapper">

                            <button
                                className="bubble_custom"
                                onClick={() => navigate("/formacionycursos")}
                            >
                                <div className="blue_custom"></div>
                                <div className="purple_custom"></div>
                                <div className="pink_custom"></div>
                                <div className="highlight_custom" />
                                <div className="text_custom static_custom">Formación/Cursos</div>
                            </button>

                            <button
                                className="bubble_custom"
                                onClick={() => navigate("/experiencialaboral")}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                Experiencia laboral
                            </button>

                            <button
                                className="bubble_home"
                                onClick={() => navigate("/proyectos")}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                Proyectos
                            </button>

                            <button
                                className="bubble_home"
                                onClick={() => navigate("/formacion")}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                Tecnologías
                            </button>


                        </div>



                    </div>

                </div>
            </main>

        </div >
    );
}


