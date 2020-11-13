import React, { useState } from "react";

const Fibonnacci = () => {
  const [number, setNumber] = useState(null);
  const [validar, setValidar] = useState(null);
  const [error, setError] = useState("");

  const data = (e) => {
    setValidar(parseInt(e.target.value));
    if (parseInt(e.target.value) === 0) {
      setError("El numero debe ser mayor a 0");
    } else if (parseInt(e.target.value) < 1) {
      setError("Los numero deben ser positivos");
    } else {
      setNumber(parseInt(e.target.value));
      setError("");
    }
  };
  const getFibonacciList = (number) => {
    let fibonacciTab = [0, 1];
    for (let i = 0; i < number; i++) {
      fibonacciTab[fibonacciTab.length] = fibonacciTab[i] + fibonacciTab[i + 1];
    }
    return fibonacciTab;
  };

  const fibonacciList = getFibonacciList(number);

  return (
    <div className="container mx-auto mt-5 bg-white rounded-md p-4 shadow-xl">
      <h1 className="font-bold text-xl mb-2 text-center">Serie Fibonacci</h1>

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
        Esta es la lista de numero Fibonacci :
      </h2>
      <div>
        <span>
          {fibonacciList.map((element, i) => (
            <span
              className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2"
              key={i}
            >
              {error === "" ? element : null}
            </span>
          ))}
        </span>
        {error === "" ? null : (
          <span className="mt-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default Fibonnacci;
