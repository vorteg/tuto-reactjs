import React from "react";

const Contador = () => {
  const [numero, setNumero] = React.useState(0);

  const clicking = () => {
    console.log("click");
    setNumero(numero + 1);
  };

  return (
    <>
      <hr />
      <h2>Contadors</h2>
      <h3>nuestro numero aumentado:{numero}</h3>
      <h4>{numero > 2 ? "Es mayor a dos" : "Es menor a dos"}</h4>
      <button onClick={() => clicking()}>Aumentar</button>
    </>
  );
};

export default Contador;
