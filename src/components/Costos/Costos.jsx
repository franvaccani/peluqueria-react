
const Costos = () => {
    return (
      <div className="bg-[#1b1b1b] h-[50vh] flex justify-center items-center font-sans flex-col text-white py-12 px-6">
        <h2 className="text-center text-4xl font-extralight mb-10 font-dela">
          COSTOS & SERVICIOS
        </h2>
        <div className="max-w-md mx-auto font-poppins">
          {/* Título */}
          {/* Lista de servicios */}
          <ul className="space-y-4">

            <div className="mb-6">
            <li className="flex justify-between items-center border-b border-gray-700 pb-1">
              <span className=" pr-0 text-xl">Cabello Corto + Lavado</span>
              <span className="font-medium">$17.000</span>
            </li>
            <p className="text-gray-400 text-sm">Staff Dani Entraigas Barbers</p>
            </div>

            <div>
            <li className="flex justify-between items-center border-b border-gray-700 pb-1">
              <span className="text-xl">Cabello Largo + Lavado</span>
              <span className="font-medium pl-4">$25.000</span>
            </li>
            <p className="text-gray-400 text-sm">Staff Dani Entraigas Barbers</p>
            </div>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Costos;