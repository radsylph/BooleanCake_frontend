//import React from 'react';
import styled from "styled-components";
import RenderNav from "../../../components/navs/RenderNav/RenderNav.jsx";

function SabesLoPeor() {
    const region = import.meta.env.VITE_REGION;
    let primaryColor;
    let imagelanding;
    switch (region) {
        case 'VEN':
          primaryColor = '#333'; // Rojo para la región US
          break;
        case 'EU':
          primaryColor = '#020b5e'; // Azul para la región EU
          break;
        case 'USA':
          primaryColor = '#b30e0e'; // Azul para la región EU
          break;
        case 'HYRULE':
          primaryColor = '#d4af4a'; // Azul para la región EU
          break;
        default:
          primaryColor = '#ffd700'; // Negro por defecto
      }
    switch (region) {
        case 'VEN':
          imagelanding = '/src/assets/images/femalecake.jpg'; // Rojo para la región US
          break;
        case 'EU':
          imagelanding = '/src/assets/images/unioneurope2.jpeg'; // Azul para la región EU
          break;
        case 'USA':
          imagelanding = '/src/assets/images/m.jpg'; // Azul para la región EU
          break;
        case 'PERU':
          imagelanding = '/src/assets/images/sopita.jpeg'; // Azul para la región EU
          break;
        case 'HYRULE':
          imagelanding = "/src/assets/images/carrotcake.png"; // Azul para la región EU
          break;
        default:
          imagelanding = "/src/assets/images/m.jpg"; // Negro por defecto
      }
  return (
    <BnvDiv className="div-container">    
    <div className="text-container">
      <h2 className="text-tittle">sabes lo peor?</h2>
      <br></br>
      <p className="text-pa">Yo no soy ningún perro</p>
    </div>      
      <div className="img-container">
            <img  src={imagelanding} alt="M"/>
      </div>
    </BnvDiv>
  );
}

export default SabesLoPeor

const BnvDiv = styled.div`
`