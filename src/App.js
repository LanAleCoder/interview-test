import "./App.css";
import Form from "./components/Form";
import Lista from "./components/Lista";
import Alerta from "./components/Alerta/alerta";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  const [estudiante, setEstudiante] = useState({
    _id: "",
    nombre: "",
    carnet: "",
    genero: "",
    telefono: "",
    fechaNacimiento: "",
    carrera: "",
    generoPoesia: "",
    direccion: "",
  });
  const [estudiantes, setEstudiantes] = useState([{}]);
  useEffect(() => {
    const getEstudiantes = () => {
      fetch("http://localhost:3000/api/verSolicitudes")
        .then((res) => res.json())
        .then((res) => setEstudiantes(res.Solicitudes));
      console.log(setEstudiantes);
    };
    getEstudiantes();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Form estudiante={estudiante} setEstudiante={setEstudiante} />
          }
        />
        <Route path="/alerta" element={<Alerta />} />
        <Route path="/reporte" element={<Lista estudiante={estudiantes} />} />
      </Routes>
    </div>
  );
}

export default App;
