import React from "react";

const Buttons = ({ onButtonClick }) => {
  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
    ["AC", "%"], // √ 대신 % 추가!
  ];

  return (
    <div className="buttons-container">
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((btn) => (
            <button
              key={btn}
              onClick={() => onButtonClick(btn)}
              className={`button ${
                btn === "AC"
                  ? "clear"
                  : ["+", "-", "*", "/", "=", "%"].includes(btn) // %도 연산자 색으로
                  ? "operator"
                  : ""
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;
