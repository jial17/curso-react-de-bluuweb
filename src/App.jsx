/* import Frutas from "./components/Frutas";
import Contador from "./components/Contador";

const App = () => {
  const saludo = "saludo desde variable";
  const claseObjeto = {
    primary: "text-primary",
    danger: "text-danger",
  };
  const user = false;
  const SaludoBienvenida = () => {
    return <h2 className="text-success">¡Bienvenido!</h2>;
  };

  const SaludoDespedida = () => {
    return <h2 className="text-danger">¡Hasta la próxima!</h2>;
  };

  const saludoFuncion = (nombre) => {
    console.log(`${nombre}, diste click desde la función con parámetros`);
  };
  return (
    <div className="container">
      <h1>Mi primer componente</h1>

      <Contador />

      <p className={claseObjeto.primary}>{saludo}</p>
      {user ? <SaludoBienvenida /> : <SaludoDespedida />}

      <Frutas />

      <button
        className="btn btn-primary"
        onClick={() => saludoFuncion("Javid")}
      >
        dame Click
      </button>
    </div>
  );
};
export default App;
 */

import React from "react";
// import FormNoControlados from "./components/FormNoControlados";
import FormulariosControlados from "./components/FormulariosControlados";

const App = () => {
  return (
    <div className="container">
      <h1>FORMULARIOS</h1>
      {/* <FormNoControlados /> */}
      <FormulariosControlados />
    </div>
  );
};

export default App;
