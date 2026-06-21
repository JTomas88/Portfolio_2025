import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import "./formacion.css";
import Navbar from "../../components/Navbar/Navbar";

export default function Formacion() {
    const [mostrarContenido, setMostrarContenido] = useState(null)

    // Para que sólo se abra un acordeon a la vez
    const alternarAcordeon = (id) => {
        setMostrarContenido((prev) => (prev === id ? null : id));
    };

    const formacionDeveloper = [
        {
            id: "angular",
            fecha: "01/2025 - 05/2025",
            titulo: "Curso Angular: de cero a experto",
            institucion: "Udemy",
            descripcion: "Angular 19, bases de TypeScript, componentes, interceptores, servicios, pipes, rutas, lazyload, SPA, tailwind, signals, formularios reactivos, mapas, carga de archivos y despliegues."
        },
        {
            id: "cursoGoogle",
            fecha: "02/2025",
            titulo: "Curso: Introducción al desarrollo web: HTML y CSS",
            institucion: "Google Digital Academy",
            descripcion: "Historia de la web, cómo funciona la web, como se escribe una página web, como se publica un sitio web, escritura de páginas web bien estructuradas, presentación de una página web, elemento de una página web, maquetación, posicionamiento SEO."
        },
        {
            id: "python",
            fecha: "03/2025",
            titulo: "Curso Python",
            institucion: "Santander Open Academy",
            descripcion: "Sintaxis básica, estructuras de control, funciones, programación orientada a objetos y manipulación de datos." // Revisar si necesitas cambiar este texto
        },
        {
            id: "bootcamp",
            fecha: "04/2025 - 09/2025",
            titulo: "Bootcamp: Fullstack Developer",
            institucion: "4Geeks Academy",
            descripcion: "HTML, CSS, Bootstrap, Formularios de HTML, Github, JavaScript, estándares y alineamientos de código, legibilidad, DOM, React, hooks de React, REST API, fetch, Python, programación orientada a objetos, base de datos SQLAlchemy, autenticación con JWT. Proyecto final: Carefy (elegido como el mejor proyecto dentro de su cohorte)."
        },
        {
            id: "desde0",
            fecha: "08/2023 - 04/2024",
            titulo: "Curso: Programación profesional desde cero",
            institucion: "Udemy",
            descripcion: <>Aprendizaje con <strong>Pascal</strong>: entrada y salida estándar, selección, repetición iterativa, arreglos, funciones, enumerados y registros, unidades y proyectos, archivos, memoria dinámica con punteros, programación orientada a objetos, interfaces gráficas de usuarios, bases de datos SQL. <br /><br />Aprendizaje con <strong>C++, Java y JavaScript</strong>: entrada y salida estándar, selección, repetición iterativa, arreglos, funciones, modularización básica y avanzada, recursividad, herencia y polimorfismo. <br /><br /><strong>HTML, CSS, DOM, BOM</strong></>
        }
    ];

    const otraFormacion = [
        {
            id: "aviacion",
            fecha: "04/2026 - Actualmente",
            titulo: "Fabricación de componentes aeroespaciales con materiales compuestos",
            institucion: "Centro de Referencia Nacional, Illescas",
            descripcion: "Certificado de profesionalidad en la fabricación y conformado de piezas aeronáuticas de fibra de carbono mediante procesos manuales y automáticos, incluyendo su curado en autoclave y el mecanizado final según estándares de alta precisión."
        },

        {
            id: "excel",
            fecha: "05/2023",
            titulo: "Curso: Excel Avanzado",
            institucion: "Plataforma E-learning",
            descripcion: "Aprendizaje y ejercicios sobre: Rangos, inserción de objetos, bases de datos, formularios, vistas, estructuras de control, análisis de datos, plantillas, macros y obtención de datos externos."
        },
        {
            id: "trabajosocial",
            fecha: "09/2006 - 06/2010",
            titulo: "Diplomatura: Trabajo Social",
            institucion: "Universidad Complutense de Madrid",
            descripcion: "Estudio y aplicación de métodos para intervenir en problemáticas sociales, promover el bienestar y la justicia social, y fortalecer el desarrollo humano y comunitario. Forma profesionales capaces de diagnosticar, planificar y ejecutar acciones que mejoren las condiciones de vida de individuos, grupos y comunidades. Prácticas de carrera en sector de inmigración y asilados."
        }
    ];





    return (
        <div>
            <div className="cajon_navbar">
                <Navbar />
            </div>

            <div className="flex flex-wrap">
                {/* Formación developer */}
                <div className="w-full md:w-1/2 min-h-screen formacion_container py-8 flex flex-col">                    <div className="m-3">
                    <div className="font-bold titulo_formacion text-center">
                        FORMACIÓN DEVELOPER
                    </div>
                </div>

                    <main>
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            {formacionDeveloper.map((item, index) => {
                                // Si el índice es par va a la izquierda. Si es impar a la derecha.
                                const esIzquierda = index % 2 === 0;

                                return (
                                    <li key={item.id}>
                                        {esIzquierda && <hr />}

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


                                        <div className={`mb-10 ${esIzquierda ? "timeline-start md:text-end" : "timeline-end md:text-start"}`}>
                                            <time className="font-mono italic">{item.fecha}</time>

                                            <div className="accordion">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button
                                                            onClick={() => alternarAcordeon(item.id)}
                                                            aria-expanded={mostrarContenido === item.id}
                                                            className={esIzquierda ? "boton_acordeon_izquierda" : "boton_acordeon_derecha"}
                                                        >
                                                            <span className="titulacion">{item.titulo}</span>
                                                            <span>{item.institucion}</span>

                                                            {mostrarContenido === item.id ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20">
                                                                    <path fill="currentColor" d="m11 7l-4 6h8z" />
                                                                </svg>
                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20">
                                                                    <path fill="currentColor" d="m15 8l-4.03 6L7 8z" />
                                                                </svg>
                                                            )}
                                                        </button>
                                                    </h2>

                                                    <div className={`accordion-collapse collapse ${mostrarContenido === item.id ? "show" : ""}`}>
                                                        <div className="accordion-body descripcion">
                                                            {item.descripcion}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                    </li>
                                );
                            })}
                        </ul>
                    </main>
                </div>
                {/* Otras formaciones */}
                <div className="w-full md:w-1/2 min-h-screen formacion_container py-8 flex flex-col">                    <div className="m-3">
                    <div className="font-bold titulo_formacion text-center">
                        OTRAS FORMACIONES
                    </div>
                </div>

                    <main>
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            {otraFormacion.map((item, index) => {
                                // Si el índice es par va a la izquierda. Si es impar a la derecha.
                                const esIzquierda = index % 2 === 0;

                                return (
                                    <li key={item.id}>
                                        {esIzquierda && <hr />}

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


                                        <div className={`mb-10 ${esIzquierda ? "timeline-start md:text-end" : "timeline-end md:text-start"}`}>
                                            <time className="font-mono italic">{item.fecha}</time>

                                            <div className="accordion">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button
                                                            onClick={() => alternarAcordeon(item.id)}
                                                            aria-expanded={mostrarContenido === item.id}
                                                            className={esIzquierda ? "boton_acordeon_izquierda" : "boton_acordeon_derecha"}
                                                        >
                                                            <span className="titulacion">{item.titulo}</span>
                                                            <span>{item.institucion}</span>

                                                            {mostrarContenido === item.id ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20">
                                                                    <path fill="currentColor" d="m11 7l-4 6h8z" />
                                                                </svg>
                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20">
                                                                    <path fill="currentColor" d="m15 8l-4.03 6L7 8z" />
                                                                </svg>
                                                            )}
                                                        </button>
                                                    </h2>

                                                    <div className={`accordion-collapse collapse ${mostrarContenido === item.id ? "show" : ""}`}>
                                                        <div className="accordion-body descripcion">
                                                            {item.descripcion}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                    </li>
                                );
                            })}
                        </ul>
                    </main>
                </div>

            </div>





        </div>

    )
}