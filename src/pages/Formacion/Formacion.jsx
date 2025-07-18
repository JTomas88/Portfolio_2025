import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import "./formacion.css";
import Navbar from "../../components/Navbar/Navbar";

export default function Formacion() {
    const [mostrandoContenido, setMostrandoContenido] = useState(false)


    const mostrandoAcordeon = () => {
        if (mostrandoContenido === false) {
            setMostrandoContenido(true)
        } else {
            setMostrandoContenido(false)
        }
    }




    return (
        <div>
            <div className="cajon_navbar">
                <Navbar />
            </div>

            <div className="w-full min-h-screen formacion_container py-8 flex flex-col">
                <div className="m-3">
                    <div className="text-6xl font-bold titulo_formacion text-center">
                        FORMACIÓN / CURSOS
                    </div>
                </div>

                <main >
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
                                <time className="font-mono italic">2025 (Actualmente)</time>
                                <div className="text-lg font-black">Curso: Ángular: de cero a experto</div>
                                <div className="text-sm">Udemy</div>
                                <p className="descripcion_formacion">
                                    Bases de TypeScript, componentes, interceptores, servicios, pipes, rutas, lazyload, SPA, tailwind, signals, formularios reactivos, mapas, carga de archivos y despliegues.
                                </p>
                            </div>
                            <hr />
                        </li>
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
                            <div className="timeline-end md:mb-10">
                                <time className="font-mono italic">Febrero 2025</time>
                                <div className="text-lg font-black">Curso: Introducción al desarrollo web: HTML y CSS</div>
                                <div className="text-sm">Google Digital Academy</div>
                                <p className="descripcion_formacion">
                                    Historia de la web, cómo funciona la web, como se escribe una página web, como se publica un sitio web, escritura de páginas web bien estructuradas, presentación de una página web, elemento de una página web, maquetación, posicionamiento SEO,
                                </p>
                            </div>
                            <hr />
                        </li>
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
                                <time className="font-mono italic">Marzo 2025</time>
                                <div className="text-lg font-black">Curso: Python</div>
                                <div className="text-sm">Santander Open Academy</div>
                                <p className="descripcion">
                                    Fundamentos de Python, variables, operadores, estructuras de control, bucles, estructuras de datos, tuplas, diccionarios, conjuntos, funciones, manejo de errores y excepciones, importación y creación de módulos, paquetes.
                                </p>
                            </div>
                            <hr />
                        </li>
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
                            <div className="timeline-end md:mb-10">
                                <time className="font-mono italic">Septiembre 2024</time>
                                <div className="text-lg font-black">Bootcamp: FullStack Developer</div>
                                <div className="text-sm">4Geeks Academy</div>
                                <p className="descripcion_formacion">
                                    HTML, CSS, Bootstrap, Formularios de HTML, Github, JavaScript, estándares y alineamientos de código, legibilidad, DOM, React, hooks de React, REST API, fetch, Python, programación orientada a objetos, base de datos SQLAlchemy, autenticación con JWT.
                                    Proyecto final: Carefy (elegido como el mejor proyecto dentro de su cohorte.)
                                </p>
                            </div>
                            <hr />
                        </li>
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
                                <time className="font-mono italic">Marzo 2024</time>
                                <div className="text-lg font-black">Curso: Programación profesional desde 0</div>
                                <div className="text-sm">Udemy</div>
                                <p className="descripcion_formacion">
                                    Aprendizaje con <strong>Pascal</strong>: entrada y salida estandar, selección, repetición iterativa, arreglos,
                                    funciones, enumerados y registrso, unidades y proyectos, archivos, memoria dinámica con punteros, programación orientada a objetos, interfaces gráficas de usuarios, bases de datos SQL.
                                    Aprendizaje con <strong>C++, Java y JavaScript</strong>: entrada y salida estandar, selección, repetición iterativa, arreglos,
                                    funciones, modularización básica y avanzada, recursividad, herencia y polimormismo.
                                    <strong>HTML, CSS, DOM, BOM</strong>
                                </p>
                            </div>
                            <hr />
                        </li>
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
                            <div className="timeline-end md:mb-10">
                                <time className="font-mono italic">2007</time>



                                <div class="accordion" id="acordeon_excel">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="boton_acordeon_izquierda" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_excel" aria-expanded="true" aria-controls="collapse_excel">
                                                <p className="titulacion">Curso: Excel Avanzado</p>
                                                <p>Plataforma E-learning</p>
                                            </button>
                                        </h2>
                                        <div id="collapse_excel" class="accordion-collapse collapse" data-bs-parent="#acordeon_excel">
                                            <div class="accordion-body">
                                                <p className="descripcion_formacion">
                                                    Aprendizaje y ejercicios sobre: Rangos, inserción de objetos, bases de datos, formularios, vistas, estructuras de control, análisis de datos, plantillas, macros y obtención de datos externos.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <hr />
                        </li>
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
                            {/* // */}
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">09/2006 - 06/2010</time>
                                <div class="accordion" id="acordeon_ts">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="boton_acordeon_derecha" onClick={() => mostrandoAcordeon()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <p className="titulacion">Diplomatura: Trabajo Social</p>
                                                <p>Universidad Complutense de Madrid</p>
                                                {mostrandoContenido ? (
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><path fill="currentColor" d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z" /></svg>

                                                    </div>
                                                ) : (
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><path fill="currentColor" d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199" /></svg>
                                                    </div>
                                                )}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#acordeon_ts">
                                            <div class="accordion-body">
                                                <p className="descripcion_formacion">
                                                    Estudio y aplicación de métodos para intervenir en problemáticas sociales, promover el bienestar y la justicia social, y fortalecer el desarrollo humano y comunitario. Forma profesionales capaces de diagnosticar, planificar y ejecutar acciones que mejoren las condiciones de vida de individuos, grupos y comunidades.
                                                    Prácticas de carrera en sector de inmigración y asilados.
                                                </p>
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