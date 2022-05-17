import react, { useRef } from "react";

const FormNoControlados = () => {
  const formulario = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("...procesando");
    const datos = new FormData(formulario.current);
    console.log(...datos.entries());
    const objetoDatos = Object.fromEntries([...datos.entries()]);
    console.log(objetoDatos);

    const { todoDescripcion, todoName } = objetoDatos;
    if (!todoDescripcion.trim() || !todoName.trim()) {
      console.log("Debes completar los campos");
      return;
    }
    console.log("pasó las validaciones");
  };

  return (
    <>
      <h2>No controlados</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese To-Do"
          name="todoName"
          className="form-control mb-2"
          defaultValue="Tarea #1"
        />
        <textarea
          placeholder="Ingrese descripción del To-Do"
          name="todoDescripcion"
          className="form-control mb-2"
          defaultValue="Descripción de la tarea #1"
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          defaultValue="Pendiente"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default FormNoControlados;
