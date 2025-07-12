import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import "./experiencialaboral.css";

export default function ExperienciaLaboral() {
    return (
        <div className="w-full min-h-screen formacion_container py-8 flex flex-col">
            <div className="m-5">
                <div className="text-6xl font-bold titulo_formacion text-center">
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
                            <time className="font-mono italic">08/2009 - 12/2024</time>
                            <div className="text-lg font-black">Atento España Teleservicios (Toledo)</div>
                            <div className="text-sm">Contact center</div>
                            <p className="descripcion">
                                Quality/Formador: auditorías de llamadas, feedback con teleoperadores, revisión y corrección de operativa, formaciones individuales/grupales de nuevos productos y servicios o reciclajes. Reportes de análisis de calidad y seguimiento de formaciones.<hr />
                                Coordinador: gestión de grupo de teleoperadores, seguimiento individualizado de items de calidad, TMO, ausencias, ventas formuladas y tramitadas, reportes de ventas, reuniones con resto de coordinadores y gerencia. <hr />
                                Teloperador: funciones de atención al cliente, captación y venta cruzada, gestión y seguimiento de reclamaciones, gestión y seguimiento de averías, baja de líneas telefónicas, funciones de back office.


                            </p>
                        </div>
                        <hr />
                    </li>
                </ul>
            </main>
        </div>

    )
}