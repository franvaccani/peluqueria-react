import React from "react";
import contactoImage from "../../assets/contacto.jpeg"; 

const Servicio = () => {
    return (
        <div className="contenedorContacto">
              {/* Sección de encabezado con imagen de fondo */}
              <div
                className="grayscale bg-cover font-dela bg-center bg-no-repeat h-[76vh] w-full flex flex-col justify-end items-center pb-32 text-white"
                style={{ backgroundImage: `url(${contactoImage})` }}
              >
                <h1 className="text-8xl font-dela mb-2">Servicio</h1>
                <div className="flex space-x-2 text-gray-300">
                  <span className="underline text-base font-poppins text-white">INICIO</span>
                  <span className="text-base">/</span>
                  <span className="underline text-base font-poppins text-gray-400">SERVICIO</span>
                </div>
              </div>
        </div>
    );
};

export default Servicio;