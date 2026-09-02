
import React, { useState, useRef } from "react";
import { useNavigate, } from "react-router-dom";
import fotoPerfil from '../../assets/fotoPerfil.png'
import matenimiento from '../../assets/mantenimiento2.png'
import logo from "../../assets/logo.png"
import "./mantenimiento.css";
import Bubble_Home from '../../components/Bubble_Home/Bubble_Home'

export default function Home() {


    return (

        <div className="w-full min-h-screen text-center home_container py-8 flex flex-col">
            <div className="text-center">
                <h1 className="titulo" >Juan Tomás Poves</h1>
            </div>
            <div className="flex justify-center items-center w-full py-6">
                <img src={logo} alt="Logo" className="w-[300px] max-w-full h-auto" />
            </div>


            <div className="flex justify-center">
                <div >
                    <img
                        src={fotoPerfil}
                        className="rounded-md m-4  mx-auto block fotoPerfil"
                        alt="Foto de perfil"
                    />
                    <div>
                        <h1>Este portfolio se encuentra en mantenimiento...</h1>
                        <h2>Hasta pronto!</h2>
                    </div>
                    <div className="mantenimiento">
                        <img
                            src={matenimiento}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}


