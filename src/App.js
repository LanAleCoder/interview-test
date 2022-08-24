import "./App.css";
import Form from "./components/Form";
import Lista from "./components/Lista";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
      const apiURL = process.env.REACT_APP_URLAPI
      fetch(`${apiURL}verSolicitudes`)
        .then((res) => res.json())
        .then((res) => setEstudiantes(res.Solicitudes));
    };
    getEstudiantes();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path=""
          element={
            <Form estudiante={estudiante} setEstudiante={setEstudiante} />
          }
        />
        <Route path="reporte" element={<Lista estudiante={estudiantes} />} />
      </Routes>
    </div>
  );
}

export default App;
