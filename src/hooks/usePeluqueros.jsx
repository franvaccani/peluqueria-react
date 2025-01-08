import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const usePeluqueros = () => {
  const [peluqueros, setPeluqueros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeluqueros = async () => {
      try {
        const peluquerosRef = collection(db, "peluqueros"); //LLAMA A LA BASE DE DATOS POR MEDIO DEL USEEFFECT <----
        const snapshot = await getDocs(peluquerosRef);
        const listaPeluqueros = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPeluqueros(listaPeluqueros);
      } catch (err) {
        setError("Error al cargar los peluqueros");
      } finally {
        setLoading(false);
      }
    };

    fetchPeluqueros();
  }, []);

  return { peluqueros, loading, error };
};

export default usePeluqueros;


/* Se conecta a la base de datos Firestore para obtener los documentos almacenados en la colección peluqueros.  */