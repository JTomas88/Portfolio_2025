import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import "./experiencialaboral.css";
import Navbar from "../../components/Navbar/Navbar";

export default function ExperienciaLaboral() {

    const [mostrarContenido, setMostrarContenido] = useState(null)

    // Para que sólo se abra un acordeon a la vez
    const alternarAcordeon = (id) => {
        setMostrarContenido((prev) => {
            if (prev === id) {
                return null; // Si el mismo acordeón está abierto, lo cerramos
            } else {
                return id; // Si es otro acordeón, lo abrimos
            }
        });

        console.log("mostrarContenido", mostrarContenido);
    };


    return (
        <div>
            <div className="cajon_navbar">
                <Navbar />
            </div>
            <div className="w-full min-h-screen experiencia_container flex flex-col">

                <div className="m-3">
                    <div className=" font-bold titulo_formacion text-center">
                        EXPERIENCIA LABORAL
                    </div>
                </div>
                <main>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">07/2025 - Actualmente</time>
                                <div className="text-lg font-black">Findspo</div>
                                <div className="text-sm">Full Stack Developer</div>
                                <p className="descripcion_experiencia">
                                    Diseño, desarrollo y mantenimiento de aplicaciones web, tanto del lado del cliente como del servidor.
                                    Diseño de interfaces de usuario, construcción y mantenimiento de API's, gestión de bases de datos, integración y despliegue de proyectos, optimización de rendimientos, accesibilidad y seguridad.

                                </p>
                            </div>
                            <hr />
                        </li>
                        {/* Atento España */}
                        <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-end mb-10 md:text-start">
                                <time className="font-mono italic">08/2009 - 12/2024</time>
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                onClick={() => alternarAcordeon("atento")}
                                                aria-expanded={mostrarContenido === "atento"}
                                                className="boton_acordeon_derecha"
                                            >
                                                <span className="text-lg font-black">Atento España (Toledo)</span>
                                                <span>Contact center</span>
                                                {mostrarContenido === "atento" ? <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m11 7l-4 6h8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m15 8l-4.03 6L7 8z" /></svg>}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${mostrarContenido === "atento" ? "show" : ""}`}>
                                            <div className="accordion-body descripcion">
                                                <span>
                                                    <strong>Quality/Formador</strong>: auditorías de llamadas, feedback con teleoperadores, revisión y corrección de operativa, formaciones individuales/grupales de nuevos productos y servicios o reciclajes. Reportes de análisis de calidad y seguimiento de formaciones.
                                                </span>
                                                <br />
                                                <span>
                                                    <strong>Quality/Formador</strong>: auditorías de llamadas, feedback con teleoperadores, revisión y corrección de operativa, formaciones individuales/grupales de nuevos productos y servicios o reciclajes. Reportes de análisis de calidad y seguimiento de formaciones.
                                                </span>
                                                <br />
                                                <span>
                                                    <strong>Teloperador</strong>: funciones de atención al cliente, captación y venta cruzada, gestión y seguimiento de reclamaciones, gestión y seguimiento de averías, baja de líneas telefónicas, funciones de back office.

                                                </span>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </li>
                    </ul>
                </main>
            </div>

        </div>

    )
}