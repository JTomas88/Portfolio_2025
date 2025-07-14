import React, { useState, useRef } from "react";
import { useNavigate, } from "react-router-dom";
import "./proyectos.css";

export default function Proyectos() {

    const [isPopped, setIsPopped] = useState(false);
    const [showBubble, setShowBubble] = useState(true);
    const [showBlowButton, setShowBlowButton] = useState(false);

    const splashRef = useRef(null);
    const bubbleRef = useRef(null);

    const popBubble = () => {
        setIsPopped(true);
        setShowBubble(false);

        // Reiniciar animación forzando reflow
        const splash = splashRef.current;
        splash.style.display = "block";
        splash.style.animation = "none"; // quitar animación
        void splash.offsetWidth;         // forzar reflow
        splash.style.animation = "splash 0.2s forwards"; // volver a aplicar

        setTimeout(() => {
            setShowBlowButton(true);
        }, 200);
    };

    const blowBubble = () => {
        setIsPopped(false);
        setShowBubble(true);
        setShowBlowButton(false)

        // reset animation
        bubbleRef.current.style.animation = "blow 1s";
        setTimeout(() => {
            bubbleRef.current.style.animation = "wobble 4s linear infinite alternate";
        }, 1000);

        splashRef.current.style.display = "none";
    };


    return (
        <div className="w-full min-h-screen proyectos_container py-8 flex flex-col">
            <div className="m-5">
                <div className="text-6xl font-bold titulo_proyectos text-center">
                    PROYECTOS
                </div>
            </div>

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
                    <div className="text">Pop Me!</div>
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

            <button
                className={`blow ${showBlowButton ? "show" : ""}`}
                onClick={blowBubble}
            >
                Blow Bubble
            </button>


        </div>
    )
}