import React, { useState, useEffect } from "react";
import { reservarTurno } from "../../firebase/firebaseFunctions"; // Asegúrate de tener esta función configurada correctamente
import { db } from "../../firebase/config"; // Configuración de Firebase
import { collection, getDocs } from "firebase/firestore"; // Para obtener datos de Firebase

const ReservaTurnos = () => {
  const [cliente, setCliente] = useState("");
  const [email, setEmail] = useState("");
  const [peluquero, setPeluquero] = useState("");
  const [peluqueros, setPeluqueros] = useState([]); // Lista de peluqueros
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [servicio, setServicio] = useState("");
  const [message, setMessage] = useState("");

  // Precio fijo para los turnos (puedes cambiarlo según sea necesario)
  const precioFijo = 500;

  // Cargar peluqueros desde Firebase al cargar el componente
  useEffect(() => {
    const obtenerPeluqueros = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "peluqueros"));
        const peluquerosList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPeluqueros(peluquerosList);
      } catch (error) {
        console.error("Error al cargar peluqueros: ", error);
      }
    };

    obtenerPeluqueros();
  }, []);

  // Función de pago con Mercado Pago
  const handlePago = async () => {
    const preference = {
      items: [
        {
          title: `Turno con ${peluquero} (${servicio})`,
          quantity: 1,
          currency_id: "ARS",
          unit_price: precioFijo,
        },
      ],
      payer: {
        name: cliente,
        email: email,
      },
      back_urls: {
        success: "https://peluqueria-react.vercel.app/",
        failure: "https://peluqueria-react.vercel.app/",
        pending: "https://peluqueria-react.vercel.app/",
      },
      auto_return: "approved",
    };

    try {
      const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer APP_USR-3687730779340446-010908-14a4e0c513b2ba3bb1b3d7e1084ac3f5-157928366`, // Cambiado a Bearer
        },
        body: JSON.stringify(preference),
      });

      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point; // Redirige al checkout de Mercado Pago
      } else {
        setMessage("Error al procesar el pago. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al conectar con Mercado Pago:", error);
      setMessage("Hubo un error inesperado al procesar el pago.");
    }
  };

  // Función para manejar la reserva del turno
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    try {
      // Llama a la función para reservar el turno
      const result = await reservarTurno(cliente, email, peluquero, fecha, hora, servicio);

      if (result.success) {
        setMessage("Turno reservado con éxito. ID del turno: " + result.turnoId);
        // Llamar a la función de pago después de reservar el turno
        handlePago();
      } else {
        setMessage("Hubo un problema al reservar el turno. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al reservar el turno:", error);
      setMessage("Ocurrió un error inesperado al reservar el turno.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-black mb-12">Reservá tu turno</h1>

        {message && (
          <div
            className={`text-center p-4 mb-4 ${
              message.includes("problema") || message.includes("error")
                ? "bg-red-500"
                : "bg-green-500"
            } text-white rounded`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre del cliente */}
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

          {/* Email del cliente */}
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
            <select
              value={peluquero}
              onChange={(e) => setPeluquero(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="" disabled>
                Seleccione un peluquero
              </option>
              {peluqueros.map((peluquero) => (
                <option key={peluquero.id} value={peluquero.nombre}>
                  {peluquero.nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Fecha */}
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

          {/* Hora */}
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

          {/* Servicio */}
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

          {/* Botón de enviar */}
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