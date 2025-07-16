import React, { useState, useRef, useEffect } from "react";
import { useNavigate, } from "react-router-dom";

export default function Bubble_Home({ text, route }) {
    const navigate = useNavigate();
    const splashRef = useRef(null);

    const handleClick = () => {
        splashRef.current.style.display = "block";
        splashRef.current.style.animation = "none";
        void splashRef.current.offsetWidth;
        splashRef.current.style.animation = "splash_custom 0.2s forwards";

        setTimeout(() => {
            navigate("/" + route);
        }, 450);
    };

    return (
        <div className="relative inline-block">
            <button className="bubble_custom" onClick={handleClick}>
                <div className="blue_custom"></div>
                <div className="purple_custom"></div>
                <div className="pink_custom"></div>
                <div className="highlight_custom" />
                <div className="text_custom static_custom">{text}</div>
            </button>
            <div className="container_custom" ref={splashRef} style={{ display: "none" }}>
                {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="splash_custom">
                        <div className="tail_custom"><div className="tail_custom" /></div>
                    </div>
                ))}
            </div>
        </div>
    );
};
