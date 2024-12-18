import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const CarritoContext = createContext();

// Hook para usar el contexto en cualquier componente
export const useCarrito = () => {
  return useContext(CarritoContext);
};

// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]); // Estado para almacenar los turnos en el carrito

  // Función para agregar un turno al carrito
  const agregarTurno = (turno) => {
    setCarrito((prev) => [...prev, turno]); // Agrega el turno al array existente
  };

  // Función para eliminar un turno del carrito (opcional)
  const eliminarTurno = (id) => {
    setCarrito((prev) => prev.filter((turno) => turno.id !== id));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarTurno, eliminarTurno }}>
      {children}
    </CarritoContext.Provider>
  );
};