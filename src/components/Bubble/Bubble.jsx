import React, { useState, useRef, useEffect } from "react";
import { useNavigate, } from "react-router-dom";
import "./bubble.css";

export default function Bubble({ id, nombre, descripcion, fecha_inicio, fecha_fin, tecnologias, media }) {

    const [isPopped, setIsPopped] = useState(false);
    const [showBubble, setShowBubble] = useState(true);
    const [showBlowButton, setShowBlowButton] = useState(false);
    const modalId = `exampleModal-${id}`;
    const modalRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const splashRef = useRef(null);
    const bubbleRef = useRef(null);



    const popBubble = () => {
        setIsPopped(true);
        setShowBubble(false);

        splashRef.current.style.display = "block";
        splashRef.current.style.animation = "none";
        void splashRef.current.offsetWidth;
        splashRef.current.style.animation = "splash 0.2s forwards";

        setTimeout(() => {
            setShowModal(true);
        }, 250);

    };

    const closeModal = () => {
        setIsPopped(false);
        setShowBubble(true);
        setShowBlowButton(false)
        setShowModal(false);
        bubbleRef.current.style.animation = "blow 1s";
        setTimeout(() => {
            bubbleRef.current.style.animation = "wobble 4s linear infinite alternate";
        }, 1000);
        splashRef.current.style.display = "none";

    };



    return (
        <div className="relative">
            {showBubble && (
                <button
                    ref={bubbleRef}
                    className="bubble"
                    onClick={popBubble}
                >
                    <div className="blue"></div>
                    <div className="purple"></div>
                    <div className="pink"></div>
                    <div className="highlight" />
                    <div className="text static">{nombre}</div>
                </button>
            )}

            <div
                className="container"
                ref={splashRef}
                style={{ display: "none" }}
            >
                {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="splash">
                        <div className="tail"><div className="tail" /></div>
                    </div>
                ))}
            </div>



            {/* Modal */}

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-md relative">
                        <h2 className="text-2xl font-bold mb-4">{nombre}</h2>
                        <p>{descripcion}</p>
                        <p><strong>Inicio:</strong> {fecha_inicio}</p>
                        <p><strong>Fin:</strong> {fecha_fin}</p>
                        <p><strong>Tecnologías:</strong> {tecnologias}</p>
                        {media && <img src={media} alt={nombre} className="w-full mt-4 rounded" />}
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}


        </div>
    )
}

