import React from "react";
import { useState } from "react";

export default function EjerAkeLab() {
  const [numero, setNumero] = useState(0);
  const [validar, setValidar] = useState(0);
  const [error, setError] = useState("");

  const data = (e) => {
    setValidar(e.target.value + 1);

    if (parseInt(e.target.value) === 0) {
      setError("El numero debe ser mayor a 0");
    } else if (parseInt(e.target.value) < 1) {
      setError("Los numero deben ser positivos");
    } else {
      setNumero(parseInt(e.target.value) + 1);
      setError("");
    }
  };
  const list = (numero) => {
    let element = [];
    for (let i = 1; i < numero; i++) {
      element[i] = +[i];
    }
    return element;
  };

  const lista = list(numero);

  return (
    <>
      <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
        <h1 className="font-bold text-xl mb-2 text-center">Algoritmo AkeLab</h1>

        <div className="flex ">
          <div className=" p-3 bg-gray-200 border text-gray-700 ">
            <span>#</span>
          </div>
          <input
            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="number"
            placeholder="Escriba un numero"
            onChange={data}
            autoFocus
          />
        </div>
        <h2 className="font-bold text-sm mt-5 text-gray-600">
          Esta es la lista de numeros con las palabras Ake y Lab
        </h2>
        <div>
          <span>
            <span>
              {lista.map((element, i) => (
                <span
                  className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2"
                  key={i}
                >
                  {element % 3 === 0 && element % 5 === 0
                    ? "AkeLab"
                    : element % 3 === 0
                    ? "ake"
                    : element % 5 === 0
                    ? "lab"
                    : element}
                </span>
              ))}
              {error && (
                <span className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                  {error}
                </span>
              )}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
