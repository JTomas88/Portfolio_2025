import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import "./formacion.css";

export default function Formacion() {
    return (
        <div className="w-full min-h-screen formacion_container py-8 flex flex-col">
            <div className="m-5">
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
                            <div className="text-lg font-black">Curso: Excel Avanzado</div>
                            <div className="text-sm">Plataforma e-learning</div>
                            <p className="descripcion_formacion">
                                Aprendizaje y ejercicios sobre: Rango,s inserción de objetos, bases de datos, formularios, vistas, estructuras de control, análisis de datos, plantillas, macros y obtención de datos externos.
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
                            <time className="font-mono italic">Junio 2010</time>
                            <div className="text-lg font-black">Diplomatura: Trabajo Social</div>
                            <div className="text-sm">Universidad Complutense de Madrid</div>
                            <p className="descripcion_formacion">
                                Estudio y aplicación de métodos para intervenir en problemáticas sociales, promover el bienestar y la justicia social, y fortalecer el desarrollo humano y comunitario. Forma profesionales capaces de diagnosticar, planificar y ejecutar acciones que mejoren las condiciones de vida de individuos, grupos y comunidades.
                                Prácticas de carrera en sector de inmigración y asilados.
                            </p>

                        </div>
                    </li>
                </ul>
            </main>

        </div>
    )
}