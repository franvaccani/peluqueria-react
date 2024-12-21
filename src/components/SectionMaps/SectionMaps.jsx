import React from "react";

 const SectionMaps = () => {
  return (
    <section className="flex flex-col h-[70vh] lg:flex-row items-center justify-between gap-6 px-6 py-12 bg-[#000]">
      {/* Sección de Google Maps */}
      <div className="w-full lg:w-1/2 h-64 lg:h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1694833334323!2d144.9537353153708!3d-37.81627937975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777b8abf0c0e!2sGoogle!5e0!3m2!1sen!2sus!4v1600209275255!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Sección del logo */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img
          src="../src/assets/newlogo.png"
          alt="Logo de la peluquería"
          className="w-52 h-52 lg:w-1/2 object-contain"
        />
      </div>
    </section>
  );
};
export default SectionMaps;



