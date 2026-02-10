import React, { useState } from 'react';


function Calculator() {
  // State for inputs
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  // State for result
  const [result, setResult] = useState("");

  // Calculate sum
  const calculateSum = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  // Clear inputs and result
  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div>
      <h1>Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />

      <div>
        <button onClick={calculateSum}>
          Calculate Sum
        </button>

        <button onClick={clearAll}>
          Reset
        </button>
      </div>

      {result !== "" && (
        <h3>Result: {result}</h3>
      )}
    </div>
  );
}

export default Calculator;
