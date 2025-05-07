import React, { useState } from 'react';
import '../styles/App.css';

const Formulario = ({ agregarCita }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, fecha, hora, sintomas].includes('')) return;

    const nuevaCita = {
      id: crypto.randomUUID(),
      nombre,
      fecha,
      hora,
      sintomas,
    };

    agregarCita(nuevaCita);

    // Reset form
    setNombre('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <div className="formulario">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre Paciente"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
        <textarea
          placeholder="Síntomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
};

export default Formulario;
