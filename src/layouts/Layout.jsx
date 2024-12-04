import  Footer  from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Barra de navegación */}
      {/* Contenido de la página */}
      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Layout;
