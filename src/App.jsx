import React, { useState } from 'react';
import Formulario from './formulario';
import Listado from './listado';
import '../assets/App.css';

const App = () => {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  return (
    <div className="app-container">
      <h1>APP</h1>
      <div className="contenido">
        <Formulario agregarCita={agregarCita} />
        <Listado citas={citas} />
      </div>
    </div>
  );
};

export default App;
