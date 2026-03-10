import React from "react";

function Calc({
  display,
  setDisplay,
  firstNumber,
  setFirstNumber,
  operator,
  setScreen,
  setOperator,
}) {
  const handleNumber = (num) => {
    setDisplay(display + num);
  };

  const handleOperator = (op) => {
    setFirstNumber(parseFloat(display));
    setOperator(op);
    setDisplay("");
  };

  const calculate = () => {
    const secondNumber = parseFloat(display);
    let result = 0;

    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setFirstNumber(null);
    setOperator(null);
  };

  const clear = () => {
    setDisplay("");
    setFirstNumber(null);
    setOperator(null);
  };

  return (
    <div className="calc">
        <div className="top">
            <h1>Ingenious Claculator</h1>

            <button onClick={()=>{setScreen('tabs')
                clear()
            }}>Go back home</button>
        </div>
      <input value={display} readOnly style={{ marginBottom: "10px" }} />

      <div className="calc-buttons">
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("/")}>/</button>
     
        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleOperator("*")}>*</button>
      
        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={() => handleOperator("-")}>-</button>
     
        <button onClick={() => handleNumber("0")}>0</button>
        
        <button onClick={clear}>C</button>
        <button onClick={() => handleOperator("+")}>+</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calc;