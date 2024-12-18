import { collection, getDocs, addDoc } from "firebase/firestore"; // Asegúrate de importar addDoc
import { db } from "./config";

export const obtenerPeluqueros = async () => {
  const peluquerosRef = collection(db, "peluqueros");
  const snapshot = await getDocs(peluquerosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const reservarTurno = async (cliente, email, peluquero, fecha, hora, servicio) => {
  try {
    await addDoc(collection(db, "turnos"), {
      cliente,
      email,
      peluquero,
      fecha,
      hora,
      servicio,
      estado: "pendiente", // Inicialmente el turno está pendiente
      timestamp: new Date()
    });
    console.log("¡Turno reservado exitosamente!");
  } catch (error) {
    console.error("Error al reservar turno: ", error);
  }
};