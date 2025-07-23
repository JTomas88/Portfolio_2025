import React, { useState, useRef } from "react";
import "./bubble_proyectos.css";

export default function Bubble_Proyectos({
    id,
    nombre,
    descripcion,
    url,
    fecha_inicio,
    fecha_fin,
    tecnologias,
    media,
    style,
}) {
    const [isPopped, setIsPopped] = useState(false);
    const [showBubble, setShowBubble] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const splashRef = useRef(null);
    const bubbleRef = useRef(null);

    const popBubble = () => {
        setIsPopped(true);
        setShowBubble(false);
    };

    const closeModal = () => {
        setIsPopped(false);
        setShowBubble(true);
        setShowModal(false);

        bubbleRef.current.style.animation = "blow 1s";
        setTimeout(() => {
            bubbleRef.current.style.animation =
                "wobble 4s linear infinite alternate";
        }, 1000);
    };

    // Mostrar modal tras un pequeño delay
    React.useEffect(() => {
        if (isPopped) {
            const timer = setTimeout(() => {
                setShowModal(true);
            }, 250);
            return () => clearTimeout(timer);
        }
    }, [isPopped]);

    return (
        <div className="relative" style={style}>
            {showBubble && (
                <button ref={bubbleRef} className="bubble" onClick={popBubble}>
                    <div className="blue"></div>
                    <div className="purple"></div>
                    <div className="pink"></div>
                    <div className="highlight" />
                    <div className="bubble-text">
                        <div className="nombre">{nombre}</div>
                        <div className="fecha">Inicio: {fecha_inicio}</div>
                        <div className="fecha">Fin: {fecha_fin}</div>
                    </div>
                </button>
            )}

            {/* Splash explosion */}
            <div
                className={`container ${isPopped ? "visible" : "invisible"}`}
                ref={splashRef}
            >
                {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="splash">
                        <div className="tail">
                            <div className="tail" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal con detalle del proyecto */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="rounded-lg p-6 shadow-lg w-11/12 max-w-md relative modal_proyecto bg-white">
                        <h2 className="text-2xl font-bold mb-0 md:mb-4">{nombre}</h2>
                        <p className="text-justify">{descripcion}</p>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mb-6 block">
                            {url}
                        </a>
                        <p className="mb-0 md:mb-4 whitespace-nowrap">
                            <span className="font-semibold inline">Inicio:</span>&nbsp;{fecha_inicio}
                        </p>
                        <p>
                            <span className="font-semibold">Fin:</span> {fecha_fin}
                        </p>
                        <p>
                            <strong>Tecnologías:</strong> {tecnologias}
                        </p>

                        {media && media.length > 0 && media[0].urlVideo && (
                            <div className="video-container">
                                <iframe
                                    src={media[0].urlVideo}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 boton_modal"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
