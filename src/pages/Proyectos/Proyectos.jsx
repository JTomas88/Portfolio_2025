import React from "react";
import { useNavigate } from "react-router-dom";
import "./proyectos.css";
import Bubble_Proyectos from "../../components/Bubble_Proyectos/Bubble_Proyectos";
import Navbar from "../../components/Navbar/Navbar";

export default function Proyectos() {

    const proyectosRealizados = [
        {
            nombre: 'Carefy',
            descripcion: 'Permite conectar a personas que buscan empleo como cuidadores con familias que tienen algún miembro en situación de dependencia. Dispone de un buscador en ambos sentidos y sistema de puntaje a la persona contratada. Trabajo realizado junto a dos compañeros más y presentado como proyecto final del Bootcamp, elegido como el mejor de su cohorte.',
            fecha_inicio: '08/2024',
            fecha_fin: '09/2024',
            tecnologías_usadas: 'Frontend: React. Backend: Python. Flask API. Cloudinary. JWT Authentication.',
            media: [{ urlVideo: 'https://www.youtube.com/embed/uqxDaXIb7z8?si=gWQS_17cCpQWDXfC' }]
        },
        {
            nombre: 'Carefy',
            descripcion: 'Permite conectar a personas que buscan empleo como cuidadores con familias que tienen algún miembro en situación de dependencia. Dispone de un buscador en ambos sentidos y sistema de puntaje a la persona contratada. Trabajo realizado junto a dos compañeros más y presentado como proyecto final del Bootcamp, elegido como el mejor de su cohorte.',
            fecha_inicio: '08/2024',
            fecha_fin: '09/2024',
            tecnologías_usadas: 'Frontend: React. Backend: Python. Flask API. Cloudinary. JWT Authentication.',
            media: [{ urlVideo: 'https://www.youtube.com/embed/uqxDaXIb7z8?si=gWQS_17cCpQWDXfC' }]
        },
        {
            nombre: 'Carefy',
            descripcion: 'Permite conectar a personas que buscan empleo como cuidadores con familias que tienen algún miembro en situación de dependencia. Dispone de un buscador en ambos sentidos y sistema de puntaje a la persona contratada. Trabajo realizado junto a dos compañeros más y presentado como proyecto final del Bootcamp, elegido como el mejor de su cohorte.',
            fecha_inicio: '08/2024',
            fecha_fin: '09/2024',
            tecnologías_usadas: 'Frontend: React. Backend: Python. Flask API. Cloudinary. JWT Authentication.',
            media: [{ urlVideo: 'https://www.youtube.com/embed/uqxDaXIb7z8?si=gWQS_17cCpQWDXfC' }]
        },

    ];

    return (
        <div>
            <div className="cajon_navbar">
                <Navbar />
            </div>
            <div className="w-full min-h-screen text-center proyectos_container py-8 flex flex-col">
                <div className="m-3">
                    <div className="text-6xl font-bold titulo_proyectos text-center">
                        PROYECTOS
                    </div>
                </div>

                {proyectosRealizados.map((proyecto, idx) => {
                    const randomLeft = Math.floor(Math.random() * 60);
                    return (
                        <div key={idx} className="relative w-full h-[220px]">
                            <Bubble_Proyectos
                                id={idx}
                                nombre={proyecto.nombre}
                                descripcion={proyecto.descripcion}
                                fecha_inicio={proyecto.fecha_inicio}
                                fecha_fin={proyecto.fecha_fin}
                                tecnologias={proyecto.tecnologías_usadas}
                                media={proyecto.media}
                                style={{
                                    position: 'absolute',
                                    left: `${randomLeft}%`,
                                    top: 0
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
