import React from "react";
import { useState } from "react/cjs/react.development";
const FormulariosControlados = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
  };

  const [todo, setToDo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "Pendiente",
    todoCheck: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setToDo({
      ...todo,
      /* [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : [e.target.value], */
      //al usar destructuring (const { name, value, checked, type } = e.target;), sustituimos la linea de arriba por la siguiente:
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <h1>Formularios Controlados</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese To-Do"
          name="todoName"
          className="form-control mb-2"
          /*  onChange={(e) =>setToDo({...todo, todoName: e.target.value })} */
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          placeholder="Ingrese descripción del To-Do"
          name="todoDescripcion"
          className="form-control mb-2"
          /* onChange={(e) => setToDo({...todo, todoDescripcion: e.target.value })} */
          onChange={handleChange}
          value={todo.todoDescripcion}
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          /* onChange={(e) => setToDo({...todo, todoEstado: e.target.value})} */
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="todoCheck"
            checked={todo.todoCheck}
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar prioridad
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default FormulariosControlados;
