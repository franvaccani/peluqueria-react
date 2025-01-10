import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

export const reservarTurno = async (cliente, email, peluquero, fecha, hora, servicio) => {
  try {
    // Crea el turno en Firebase
    const turnoRef = await addDoc(collection(db, "turnos"), {
      cliente,
      email,
      peluquero,
      fecha,
      hora,
      servicio,
      estado: "pendiente", // Estado inicial
      timestamp: new Date(),
    });

    console.log("Turno creado en Firebase con ID:", turnoRef.id);
    return { success: true, turnoId: turnoRef.id };
  } catch (error) {
    console.error("Error al reservar turno: ", error);
    return { success: false, error };
  }
};