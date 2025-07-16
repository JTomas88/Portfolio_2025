
import React, { useState, useRef } from "react";
import { useNavigate, } from "react-router-dom";
import fotoPerfil from '../../assets/fotoPerfil.png'
import "./home.css";

export default function Home() {
    const navigate = useNavigate();
    const [isPopped, setIsPopped] = useState(false);
    const [showBubble, setShowBubble] = useState(true);

    const bubbleRef = useRef(null);
    const splashRef = useRef(null);



    const popBubble = (rutaString) => {
        setIsPopped(true);
        setShowBubble(false);
        splashRef.current.style.display = "block";
        splashRef.current.style.animation = "none";
        void splashRef.current.offsetWidth;
        splashRef.current.style.animation = "splash_custom 0.2s forwards";


        setTimeout(() => {
            if (rutaString === 'proyectos') {
                navigate("/proyectos");
            } else if (rutaString === 'formacionycursos') {
                navigate("/formacionycursos");
            } else if (rutaString === 'experiencialaboral') {
                navigate("/experiencialaboral");
            } else if (rutaString === "tecnologias") {
                navigate("/tecnologias")
            }

        }, 450);

    };



    return (

        <div className="w-full min-h-screen text-center proyectos_container py-8 flex flex-col">
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
            <div className="relative inline-block">

                <button
                    ref={bubbleRef}
                    className="bubble_custom"
                    onClick={() => popBubble('proyectos')}
                >
                    <div className="blue_custom"></div>
                    <div className="purple_custom"></div>
                    <div className="pink_custom"></div>
                    <div className="highlight_custom" />
                    <div className="text_custom static_custom">Proyectos</div>
                </button>
                <div
                    className="container_custom"
                    ref={splashRef}
                    style={{ display: "none" }}
                >
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <div key={idx} className="splash_custom">
                            <div className="tail_custom"><div className="tail_custom" /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


