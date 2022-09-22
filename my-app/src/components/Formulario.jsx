import React from "react";

const Formulario = () => {
  const [fruta, setFruta] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [lista, setLista] = React.useState([]);

  const guardarDatos = (e) => {
    e.preventDefault();
    if (!fruta.trim()) {
      console.log("fruta vacio");
      return;
    }
    if (!description.trim()) {
      console.log("descripcion vacio");
      return;
    }
    console.log("procesando datos... " + fruta + description);

    setLista([...lista, { fruta, description }]);

    e.target.reset();
    setDescription("");
    setFruta("");
  };
  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          placeholder="Ingrese fruta"
          className="form-control mb-2"
          onChange={(e) => setFruta(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese descripcion"
          className="form-control mb-2"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Agregar
        </button>
      </form>
      <hr />
      <h2>Lista de frutas</h2>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item.fruta}:-----{item.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Formulario;
