import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
const Lista = ({ estudiante }) => {
  const [estudiantes, setEstudiantes] = useState([{}]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getEstudiantes = () => {
      fetch(`${process.env.REACT_APP_URLAPI}api/verSolicitudes`)
        .then((res) => res.json())
        .then((res) => setEstudiantes(res.Solicitudes));
    };
    getEstudiantes();
    const loadingSpinner = () => {
      if (loading === true) {
        setTimeout(() => setLoading(false), 5000);
      }
    };
    loadingSpinner();
    console.log(loading);
  }, [loading]);
  return (
    <div>
      {loading === true ? (
        <Spinner />
      ) : (
        <div className="flex flex-row flex-wrap">
          {estudiantes.map((estudiante, index) => (
            <div
              className="flex justify-center m-4"
              key={`estudiante-${estudiante._id}`}
            >
              <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {estudiante.nombre}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {`Carrera: ${estudiante.carrera}`}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {`Edad: ${estudiante.edad} años`}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {`Genero de poesia: ${estudiante.generoPoesia}`}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {`Fecha de declamación: ${estudiante.fechaDeclamacion}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lista;
