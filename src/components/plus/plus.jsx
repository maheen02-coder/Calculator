import React, { useState } from "react";
const Plus = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");
  const addNumbers = () => {
    const answer = Number(firstNumber) + Number(secondNumber);
    setResult(answer);
  };
  return (
    <div className="flex flex-col gap-4 p-5">
      <input
        type="number"
        placeholder="Enter first number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        className="border p-2 text-black"
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        className="border p-2 text-black"
      />
      <button
        onClick={addNumbers}
        className="bg-purple-500 text-white p-2 rounded"
      >
        +
      </button>
      <h2 className="text-xl font-bold">
        Result: {result}
      </h2>
    </div>
  );
};
export default Plus;