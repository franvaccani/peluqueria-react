/* Home - products - Detalle de productos - Categorias */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Servicio from "../pages/Servicio";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import NavBar from "../components/NavBar/NavBar";
import PeluqueroDetalles from "../components/Peluqueros/PeluqueroDetalle";
import PeluquerosList from "../components/Peluqueros/PeluquerosList";
export const PublicRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Nosotros" element={<Nosotros />} />
                <Route path="/Servicio" element={<Servicio />} />
                <Route path="/Galeria" element={<Galeria />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/peluquero/:id" element={<PeluqueroDetalles />} />

            </Routes>
        </Router>
    );
};