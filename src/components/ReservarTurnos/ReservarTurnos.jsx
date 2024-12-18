import React, { useState } from "react";
import { reservarTurno } from "../../firebase/firebaseFunctions";
import usePeluqueros from "../../hooks/usePeluqueros"; 

const ReservaTurnos = () => {
  const [cliente, setCliente] = useState("");
  const [email, setEmail] = useState("");
  const [peluquero, setPeluquero] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [servicio, setServicio] = useState("");
  const [message, setMessage] = useState("");

  const { peluqueros, error } = usePeluqueros(); //Hooks <----

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reservarTurno(cliente, email, peluquero, fecha, hora, servicio);
      setMessage("¡Turno reservado exitosamente!");
    } catch (error) {
      console.error(error);
      setMessage("Hubo un problema al reservar el turno.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-black mb-12">Reserva tu Turno</h1>

        {message && (
          <div
            className={`text-center p-4 mb-4 ${
              message.includes("problema") ? "bg-red-500" : "bg-green-500"
            } text-white rounded`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Peluquero */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Peluquero</label>
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <select
                value={peluquero}
                onChange={(e) => setPeluquero(e.target.value)}
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Selecciona un peluquero</option>
                {peluqueros.map((peluquero) => (
                  <option key={peluquero.id} value={peluquero.nombre}>
                    {peluquero.nombre}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Otros campos y botón */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Hora</label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Servicio</label>
            <input
              type="text"
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-900 transition duration-300"
            >
              Reservar Turno
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservaTurnos;