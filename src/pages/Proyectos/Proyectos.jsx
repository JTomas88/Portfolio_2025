import React, { useState, useRef } from "react";
import { useNavigate, } from "react-router-dom";
import "./proyectos.css";
import Bubble from "../../components/Bubble_Proyectos/Bubble_Proyectos";
import Bubble_Proyectos from "../../components/Bubble_Proyectos/Bubble_Proyectos";

export default function Proyectos() {

    const proyectosRealizados = [
        {
            nombre: 'Carefy',
            descripcion: 'Conecta a personas cuidadoras con familias que tienen algún miembro dependiente',
            fecha_inicio: '08/2024',
            fecha_fin: '09/2024',
            tecnologías_usadas: 'React, Python',
            media: ''
        }
    ]



    return (
        <div className="w-full min-h-screen text-center proyectos_container py-8 flex flex-col">
            <div className="m-5">
                <div className="text-6xl font-bold titulo_proyectos text-center">
                    PROYECTOS
                </div>
            </div>
            {/* The button to open modal */}
            <div className="d-flex flex-wrap justify-content-center gap-4">
                {proyectosRealizados.map((proyecto, idx) => (
                    <Bubble_Proyectos
                        key={idx}
                        id={idx}
                        nombre={proyecto.nombre}
                        descripcion={proyecto.descripcion}
                        fecha_inicio={proyecto.fecha_inicio}
                        fecha_fin={proyecto.fecha_fin}
                        tecnologias={proyecto.tecnologías_usadas}
                        media={proyecto.media}
                    />

                ))}

            </div>






        </div>
    )
}