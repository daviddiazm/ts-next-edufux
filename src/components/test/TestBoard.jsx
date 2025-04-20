import React, { useState } from 'react'
import TestOptions from './TestOptions'

const TestBoard = () => {
  const [res, setRes] = useState('')

  const getAnswer = (option) => {
    setRes(option)
  }


  return (
    <div className="w-11/12 max-w-6xl bg-white shadow-lg rounded-lg h-11/12 ">

      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-800 text-center p-6 bg-slate-200 shadow-lg rounded-lg">
          La capital de Colombia es?
        </h3>
      </div>

      <div className="flex justify-between items-center gap-4 h-full">
        <TestOptions onAnswer={getAnswer} />

        <button
          className={`flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-lg shadow-md transition duration-300 ${
            res
              ? "bg-orange-600 text-white hover:bg-orange-700"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={!res}
        >
          Siguiente pregunta <span className="text-lg">{">"}</span>
        </button>
      </div>

      <p className="mt-4 text-lg text-center text-gray-700">{res}</p>
    </div>
  )
}

export default TestBoard