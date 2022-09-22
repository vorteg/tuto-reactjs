import React, { useState } from "react";

const Listas = () => {
  const estadoInicial = [
    { id: 1, texto: "tarea 1" },
    { id: 2, texto: "tarea 2" },
    { id: 3, texto: "tarea 3" },
  ];
  //Ejercicio de propagacion de arrays
  const latinos = ["Mexico", "Peru"];
  const europeos = ["Francia", "UK"];

  const unidos = [...latinos, ...europeos];

  const agregarElemento = () => {
    console.log("click");
    setLista([...lista, { id: 4, texto: "tarea 4" }]);
  };

  const [lista, setLista] = useState(estadoInicial);
  return (
    <>
      <h2>Listas</h2>

      <h3>otra</h3>
      <h4>
        {unidos.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </h4>
      <hr />
      <h3>
        {lista.map((item, index) => (
          <p key={index}>{item.texto}</p>
        ))}
      </h3>
      <button onClick={() => agregarElemento()}>Agregar</button>
    </>
  );
};

export default Listas;
