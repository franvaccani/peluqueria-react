/* Home - products - Detalle de productos - Categorias */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Servicio from "../pages/Servicio";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import NavBar from "../components/NavBar/NavBar";
import PeluqueroDetalles from "../components/Peluqueros/PeluqueroDetalle";
import ReservaTurnos from "../components/ReservarTurnos/ReservarTurnos";
import Success from "../components/PagoExitoso/pagoExitoso";
import Failure from "../components/PagoError/pagoError";
import Pending from "../components/PagoPendiente/pagoPendiente";

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
                <Route path="/reserva-turnos" element={<ReservaTurnos />} /> {/* Nueva ruta */}
                <Route path="/success" element={<Success />} />
                <Route path="/failure" element={<Failure />} />
                <Route path="/pending" element={<Pending />} /> 
            </Routes>
        </Router>
    );
};