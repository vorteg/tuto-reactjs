import React, { useState } from "react";

const Eventos = () => {
  const [texto, setTexto] = useState("texto desde estado");

  const eventoClick = () => {
    console.log("me diste un click");
    setTexto("cambiando el texto");
  };

  return (
    <>
      <h2>{texto}</h2>
      <button onClick={() => eventoClick()}>Click</button>
    </>
  );
};

export default Eventos;
