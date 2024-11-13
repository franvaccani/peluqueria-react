import { Button, Center, ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import { Titulos } from "./components/Titulos/Titulos";

function App() {
  //Estados: un punto en particular en el cual mi componente se encuentra. Estos estados son mutables y tienen un valor por defecto.
  //Los estados en react son generados dentro de un componente (a menos que sea un estado global ---> lo veremos mas adelante) utilizando hooks especificos de la tecnología.
  //Entonces, que son los hooks? Son funciones de REACT que vienen predefinidas en el core para poder utilizarlas en casos especificas. Por ejemplo el hook "useState" sirve para crear un estado dentro de un componente
  // useState nos pide desestructurar desde un array dos cosas en especifico, primero una variable con el valor del estado y segundo una funcion que utilizaremos para actualizar ese estado. La función tiene algunas particularidades, la primera es que tiene que comenzar con el prefijo "set" y la segunda es que tiene que tener el mismo nombre que la variable pero con mayuscula
  // React.useState();
  return (
    <ChakraProvider>
      <NavBar />
      <div className="contenedorHeader">
      <div className="contenedorLogo-Turno">
        <div className="Logo">
          <img src="./src/assets/newlogo.png" alt="Logo" />
        </div>
        <div className="Turno">
          
        </div>
      </div>
      <div className="contenedorTituloPrincipal">
        <Titulos h1="Tu estilo, nuestro compromiso. Reserva tu turno ahora." />
      </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
