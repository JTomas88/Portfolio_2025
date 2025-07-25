
import React, { useState, useRef } from "react";
import { useNavigate, } from "react-router-dom";
import fotoPerfil from '../../assets/fotoPerfil.png'
import "./home.css";
import Bubble_Home from '../../components/Bubble_Home/Bubble_Home'

export default function Home() {


    return (

        <div className="w-full min-h-screen text-center home_container py-8 flex flex-col">
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





                </div>

            </div>
            <div className="flex flex-wrap justify-center items-center gap-30 mt-10">

                <Bubble_Home text='Formación/Cursos' route="formacionycursos" />
                <Bubble_Home text='Experiencia laboral' route="experiencialaboral" />
                <Bubble_Home text='Proyectos' route="proyectos" />
                <Bubble_Home text='Tecnologías' route="tecnologias" />
            </div>
        </div>
    );
}


