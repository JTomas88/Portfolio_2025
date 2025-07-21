import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import "./formacion.css";
import Navbar from "../../components/Navbar/Navbar";

export default function Formacion() {


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

            <div className="w-full min-h-screen formacion_container py-8 flex flex-col">
                <div className="m-3">
                    <div className=" font-bold titulo_formacion text-center">
                        FORMACIÓN / CURSOS
                    </div>
                </div>

                <main >
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {/* Curso Angular izq */}
                        <li>
                            <hr />
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
                                <time className="font-mono italic">01/2025 - Actualmente</time>
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                onClick={() => alternarAcordeon("angular")}
                                                aria-expanded={mostrarContenido === "angular"}
                                                className="boton_acordeon_izquierda"
                                            >
                                                <span className="titulacion">Curso Angular: de cero a experto</span>
                                                <span>Udemy</span>
                                                {mostrarContenido === "angular" ? <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m11 7l-4 6h8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m15 8l-4.03 6L7 8z" /></svg>}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${mostrarContenido === "angular" ? "show" : ""}`}>
                                            <div className="accordion-body descripcion">
                                                Angular 19, bases de TypeScript, componentes, interceptores, servicios, pipes, rutas, lazyload, SPA, tailwind, signals, formularios reactivos, mapas, carga de archivos y despliegues.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </li>
                        {/* Curso Google der */}
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
                                <time className="font-mono italic">02/2025</time>
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                onClick={() => alternarAcordeon("cursoGoogle")}
                                                aria-expanded={mostrarContenido === "cursoGoogle"}
                                                className="boton_acordeon_derecha"
                                            >
                                                <span className="titulacion">Curso: Introducción al desarrollo web: HTML y CSS</span>
                                                <span>Google Digital Academy</span>
                                                {mostrarContenido === "cursoGoogle" ? <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m11 7l-4 6h8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m15 8l-4.03 6L7 8z" /></svg>}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${mostrarContenido === "cursoGoogle" ? "show" : ""}`}>
                                            <div className="accordion-body descripcion">
                                                Historia de la web, cómo funciona la web, como se escribe una página web, como se publica un sitio web, escritura de páginas web bien estructuradas, presentación de una página web, elemento de una página web, maquetación, posicionamiento SEO,

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </li>
                        {/* Curso Python izq */}
                        <li>
                            <hr />
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
                                <time className="font-mono italic">03/2025</time>
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                onClick={() => alternarAcordeon("python")}
                                                aria-expanded={mostrarContenido === "python"}
                                                className="boton_acordeon_izquierda"
                                            >
                                                <span className="titulacion">Curso Python</span>
                                                <span>Santander Open Academy</span>
                                                {mostrarContenido === "python" ? <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m11 7l-4 6h8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m15 8l-4.03 6L7 8z" /></svg>}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${mostrarContenido === "python" ? "show" : ""}`}>
                                            <div className="accordion-body descripcion">
                                                Angular 19, bases de TypeScript, componentes, interceptores, servicios, pipes, rutas, lazyload, SPA, tailwind, signals, formularios reactivos, mapas, carga de archivos y despliegues.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </li>

                        {/* Bootcam der */}
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
                                <time className="font-mono italic">04/2025 - 09/2025</time>
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                onClick={() => alternarAcordeon("bootcamp")}
                                                aria-expanded={mostrarContenido === "bootcamp"}
                                                className="boton_acordeon_derecha"
                                            >
                                                <span className="titulacion">Bootcamp: Fullstack Developer</span>
                                                <span>4Geeks Academy</span>
                                                {mostrarContenido === "bootcamp" ? <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m11 7l-4 6h8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m15 8l-4.03 6L7 8z" /></svg>}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${mostrarContenido === "bootcamp" ? "show" : ""}`}>
                                            <div className="accordion-body descripcion">
                                                HTML, CSS, Bootstrap, Formularios de HTML, Github, JavaScript, estándares y alineamientos de código, legibilidad, DOM, React, hooks de React, REST API, fetch, Python, programación orientada a objetos, base de datos SQLAlchemy, autenticación con JWT.
                                                Proyecto final: Carefy (elegido como el mejor proyecto dentro de su cohorte.)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </li>

                        {/* Programación desde 0  izq */}
                        <li>
                            <hr />
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
                                <time className="font-mono italic">08/2023 - 04/2024</time>
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                onClick={() => alternarAcordeon("desde0")}
                                                aria-expanded={mostrarContenido === "desde0"}
                                                className="boton_acordeon_izquierda"
                                            >
                                                <span className="titulacion">Curso: Programación profesional desde cero</span>
                                                <span>Udemy</span>
                                                {mostrarContenido === "desde0" ? <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m11 7l-4 6h8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m15 8l-4.03 6L7 8z" /></svg>}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${mostrarContenido === "desde0" ? "show" : ""}`}>
                                            <div className="accordion-body descripcion">
                                                Aprendizaje con <strong>Pascal</strong>: entrada y salida estandar, selección, repetición iterativa, arreglos,
                                                funciones, enumerados y registrso, unidades y proyectos, archivos, memoria dinámica con punteros, programación orientada a objetos, interfaces gráficas de usuarios, bases de datos SQL.
                                                Aprendizaje con <strong>C++, Java y JavaScript</strong>: entrada y salida estandar, selección, repetición iterativa, arreglos,
                                                funciones, modularización básica y avanzada, recursividad, herencia y polimormismo.
                                                <strong>HTML, CSS, DOM, BOM</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </li>



                        {/* Curso Excel der */}
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
                                <time className="font-mono italic">05/2023</time>
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header ">
                                            <button
                                                onClick={() => alternarAcordeon("excel")}
                                                aria-expanded={mostrarContenido === "excel"}
                                                className="boton_acordeon_derecha"
                                            >
                                                <span className="titulacion">Curso: Excel Avanzado</span>
                                                <span>Plataforma E-learning</span>
                                                {mostrarContenido === "excel" ? <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m11 7l-4 6h8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m15 8l-4.03 6L7 8z" /></svg>}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${mostrarContenido === "excel" ? "show" : ""}`}>
                                            <div className="accordion-body descripcion">
                                                Aprendizaje y ejercicios sobre: Rangos, inserción de objetos, bases de datos, formularios, vistas, estructuras de control, análisis de datos, plantillas, macros y obtención de datos externos.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </li>
                        {/* Diplomatura Trabajo Social izq */}

                        <li>
                            <hr />
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
                                <time className="font-mono italic">09/2006 - 06/2010</time>
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                onClick={() => alternarAcordeon("trabajosocial")}
                                                aria-expanded={mostrarContenido === "trabajosocial"}
                                                className="boton_acordeon_izquierda"
                                            >
                                                <span className="titulacion">Diplomatura: Trabajo Social</span>
                                                <span>Universidad Complutense de Madrid</span>
                                                {mostrarContenido === "trabajosocial" ? <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m11 7l-4 6h8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="m15 8l-4.03 6L7 8z" /></svg>}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${mostrarContenido === "trabajosocial" ? "show" : ""}`}>
                                            <div className="accordion-body descripcion">
                                                Estudio y aplicación de métodos para intervenir en problemáticas sociales, promover el bienestar y la justicia social, y fortalecer el desarrollo humano y comunitario. Forma profesionales capaces de diagnosticar, planificar y ejecutar acciones que mejoren las condiciones de vida de individuos, grupos y comunidades.
                                                Prácticas de carrera en sector de inmigración y asilados.
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