import React from "react";
import { PublicRouter } from "./router/PublicRouter";
function App() {
  return (
    <div className="App">
      <PublicRouter />
    </div>
  );
}

export default App;




/*  
- Asi nacio el sincronismo, ejecutar codigo mientras se ejecutan en el otro mientras la respuesta de la promesa sigue disponible, no bloquea el unico hilo que tiene javascript
- Javascript es lenguaje de unico hilo
- Dame una diferencia entre codigo bloqueante y no bloquyeante explicacion del sincronismo y asincronismo
- Que es el asincawave - bloqueas tralcash - lescoupin - dif entre var let -
 */

  /* //Estados: un punto en particular en el cual mi componente se encuentra. Estos estados son mutables y tienen un valor por defecto.
  //Los estados en react son generados dentro de un componente (a menos que sea un estado global ---> lo veremos mas adelante) utilizando hooks especificos de la tecnología.
  //Entonces, que son los hooks? Son funciones de REACT que vienen predefinidas en el core para poder utilizarlas en casos especificas. Por ejemplo el hook "useState" sirve para crear un estado dentro de un componente
  // useState nos pide desestructurar desde un array dos cosas en especifico, primero una variable con el valor del estado y segundo una funcion que utilizaremos para actualizar ese estado. La función tiene algunas particularidades, la primera es que tiene que comenzar con el prefijo "set" y la segunda es que tiene que tener el mismo nombre que la variable pero con mayuscula
  // React.useState(); */

  /* muchas visitas una app y tenes que manejar la arquitectura para que reciba todas esas y que no colapse
  yo haria desde la api o bd balanceo de recarga, cola de mensajes <--------
  algo super importante, de igual forma saber las dos cosas 
  */