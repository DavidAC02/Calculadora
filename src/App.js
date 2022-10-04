import './App.css';
import freeCodeCampLogo from "./imagenes/fcc.png";
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from "mathjs";
import cleanOutput from './algotimos/no_input-problematico';

function App() {

  const [input, setInput]=useState("0");

  const agregarinput=val=>{
    const clean=cleanOutput(input+val)
    setInput(clean);
  };

  const calcularResultado=()=>{
    if (/\D$/.test(input)){
      setInput(evaluate(input.replace(/\D$/,"")));
    }else{
      setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarinput}>1</Boton>
          <Boton manejarClic={agregarinput}>2</Boton>
          <Boton manejarClic={agregarinput}>3</Boton>
          <Boton manejarClic={agregarinput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarinput}>4</Boton>
          <Boton manejarClic={agregarinput}>5</Boton>
          <Boton manejarClic={agregarinput}>6</Boton>
          <Boton manejarClic={agregarinput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarinput}>7</Boton>
          <Boton manejarClic={agregarinput}>8</Boton>
          <Boton manejarClic={agregarinput}>9</Boton>
          <Boton manejarClic={agregarinput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarinput}>0</Boton>
          <Boton manejarClic={agregarinput}>.</Boton>
          <Boton manejarClic={agregarinput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={ () => setInput("0")}>Clear</BotonClear>
        </div>
      </div>
      <div className="foot">
        Creado por DavidAC
      </div>
    </div>
  );
}

export default App;
