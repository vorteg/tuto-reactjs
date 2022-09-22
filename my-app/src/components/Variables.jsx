import React from 'react'

const Variables = () => {

    const saludo = "Hola desde constante"
    const imagen = "https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg.webp"
  return (
    <><h2>Nuevo componente,{ saludo}</h2>
        <img src={imagen} alt="perro" />
    </>
  )
}

export default Variables