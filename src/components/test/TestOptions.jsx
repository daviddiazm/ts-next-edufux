import React from 'react'

const TestOptions = ({onAnswer}) => {
  const options = [
    { id: 1, text: "Opción A", color: "bg-red-500" },
    { id: 2, text: "Opción B", color: "bg-blue-500" },
    { id: 3, text: "Opción C", color: "bg-yellow-500" },
    { id: 4, text: "Opción D", color: "bg-green-500" },
  ];
  return (
    // <div className="grid grid-cols-2 gap-4 w-full h-screen p-4">
    <div className="grid grid-cols-2 gap-4 w-full h-96 p-4"> 
      {options.map((option) => (
        <div
          key={option.id}
          className={`flex items-center justify-center text-white text-2xl font-bold p-8 rounded-lg cursor-pointer transition duration-300 hover:opacity-80 ${option.color}`}
          onClick={() => onAnswer(option.id)}
        >
          {option.text}
        </div>
      ))}
    </div>
  )
}

export default TestOptions