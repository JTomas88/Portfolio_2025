import React from "react";
import { useNavigate } from "react-router-dom";
import "./proyectos.css";
import Bubble_Proyectos from "../../components/Bubble_Proyectos/Bubble_Proyectos";
import Navbar from "../../components/Navbar/Navbar";

export default function Proyectos() {

    const proyectosRealizados = [
        {
            nombre: 'PrideRide',
            descripcion: 'Web-App que permite compartir coche entre usuarios para viajes de media-larga distancia. Está dirigida al colectivo LGTBIQ+ con el objetivo de realizar viajes seguros entre sus pasajeros, aunque será una aplicación abierta a todo el mundo sin diferencias roles o preferencias sexuales',
            url: '',
            fecha_inicio: '01/2025',
            fecha_fin: 'Actualmente',
            tecnologías_usadas: 'Frontend: Angular. Backend: Python. Flask API. Cloudinary. JWT Authentication. Google Maps',
            media: [{ urlVideo: '' }]
        },
        {
            nombre: 'FansClub',
            descripcion: 'Web-App realizada para un club de Fans, el cual muestra información sobre su la trayectoria de un artista. En esta fase inicial, la web es informativa, aunque está pendiente de un segundo despligue que permitirá registrar a usuarios y permitir que participen en actividades.',
            url: 'www.siennafans.club',
            fecha_inicio: '09/2024',
            fecha_fin: '12/2024',
            tecnologías_usadas: 'Frontend: React. Backend: Python. Flask API. Cloudinary. JWT Authentication. Google Places API-Autocomplete, Spotify',
            media: [{ urlVideo: 'https://www.youtube.com/embed/n4F0qS9L8fc?si=bOPUdHrr0I2YyRsK' }]
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
            <div className="w-full min-h-screen text-center proyectos_container py-8 px-4 md:px-8 flex flex-col">
                <div className="m-3">
                    <div className="text-6xl font-bold titulo_proyectos text-center">
                        PROYECTOS
                    </div>
                </div>

                {proyectosRealizados.map((proyecto, idx) => {
                    const bubbleWidth = 200;
                    const screenWidth = window.innerWidth;
                    const safeMargin = 16;

                    const maxLeft = screenWidth - bubbleWidth - safeMargin;
                    const randomLeft = Math.floor(Math.random() * maxLeft);
                    return (
                        <div key={idx} className="relative h-[220px]">
                            <Bubble_Proyectos
                                id={idx}
                                nombre={proyecto.nombre}
                                descripcion={proyecto.descripcion}
                                url={proyecto.url}
                                fecha_inicio={proyecto.fecha_inicio}
                                fecha_fin={proyecto.fecha_fin}
                                tecnologias={proyecto.tecnologías_usadas}
                                media={proyecto.media}
                                style={{
                                    position: 'absolute',
                                    left: `${randomLeft}px`,
                                    top: 0,
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
