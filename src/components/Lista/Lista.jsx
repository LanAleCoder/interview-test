import React from "react";

const Lista = ({ estudiante }) => {
  return (
    <div>
      <div className="flex flex-row flex-wrap">
        {estudiante.map((estudiantes) => (
          <div className="flex justify-center m-4" key={estudiantes._id}>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {estudiantes.nombre}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {`Carrera: ${estudiantes.carrera}`}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {`Edad: ${estudiantes.edad} años`}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {`Genero de poesia: ${estudiantes.generoPoesia}`}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {`Fecha de declamación: ${estudiantes.fechaDeclamacion}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lista;
