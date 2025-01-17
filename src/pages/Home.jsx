import React from "react";
import Layout from "../layouts/Layout.jsx";
import BtnTurno from "../components/BtnTurno/BtnTurno.jsx";
import TextGenerate from "../components/TextGenerate/ TextGenerate.jsx";
import Titulos from "../components/Titulos/Titulos.jsx";
import Costos from "../components/Costos/Costos.jsx";
import SectionMaps from "../components/SectionMaps/SectionMaps.jsx";
import PeluquerosList  from "../components/Peluqueros/PeluquerosList.jsx";
import Logo from "../assets/newlogo.png"
const Home = () => {
    return (
        <>
           
            <div className="contenedorHeader bg-[url('./assets/peluqueria.jpg')] bg-cover bg-top h-screen">

                    <div className="contenedorhijo max-sm:h-[70vh] h-[92vh] flex flex-col items-center justify-center">
                        <div className="contenedorLogo-Turno max-sm:mb-1 flex justify-between w-5/6 items-center p-2 mb-24">
                            <div className="Logo">
                                <img className="max-sm:w-32 w-48 max-sm:m-0  ml-16" src={Logo} alt="Logo" />
                            </div>
                            <div className="Turno mr-16 max-sm:m-0 ">
                                <BtnTurno />
                            </div>
                        </div>
                        <div className="contenedorTituloPrincipal font-dela h-44 flex justify-center text-center items-center">
                        <TextGenerate words="TU ESTILO, <br /> NUESTRA PASIÓN" />
                        </div>
                    </div>
                <main>
                    <div className="contenedorBienvenida bg-[#000] max-sm:h-[70vh]  h-[50vh] flex justify-center">
                        <div className="flex flex-col justify-center items-center max-sm:w-80 w-2/5">
                            <div className="bienvenidaTitulo font-poppins text-4xl text-white">
                                <Titulos h1="BIENVENIDO/A A" />
                                <Titulos h1="TDEB [ Hair Artist ]" />
                            </div>
                            <div className="bienvenidaParrafo text-[#808080] text-center font-light pt-6">
                                <Titulos p="Nuestra pasión y obsesión en lo que hacemos nos ha permitido ayudar a ciento de personas a encontrar su estilo, a estar plenamente a gusto con tu imagen. Por eso cada trabajo que hacemos está pensando especialmente para vos." />
                            </div>
                        </div>
                    </div>
                </main>
                <section>
                    <Costos />
                </section>
                <section>
                    <PeluquerosList />
                </section> 
                <section>
                    <SectionMaps />
                </section>
                <Layout />
            </div>
            
        </>
        
    );
};

export default Home;