import React from "react";
import useCalculatorLogic from "./useCalculatorLogic";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = () => {
  const { input, result, handleClick, calculateResult, clearInput } = useCalculatorLogic();

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <Buttons
        onButtonClick={(value) => {
          if (value === "=") {
            calculateResult();
          } else if (value === "AC") {
            clearInput();
          } else {
            handleClick(value); // 이제 모든 나머지는 그냥 handleClick
          }
        }}
      />
    </div>
  );
};

export default Calculator;
