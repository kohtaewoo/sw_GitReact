import { useState } from "react"; // React의 useState 훅을 가져옴 (상태 관리를 위해 필요)

// useCalculatorLogic 훅: 계산기의 상태 및 동작을 관리하는 커스텀 훅
const useCalculatorLogic = () => {
  // 상태(state) 정의
  const [input, setInput] = useState(""); // 현재 입력된 숫자 및 연산자
  const [result, setResult] = useState(""); // 계산 결과 값

  // 숫자 또는 연산자 버튼 클릭 시 입력을 업데이트하는 함수
  const handleClick = (value) => setInput((prev) => prev + value);

  // "=" 버튼을 눌렀을 때 수식을 계산하는 함수
  const calculateResult = () => {
    try {
      // eval()을 사용하여 문자열로 된 수식을 계산
      setResult(eval(input).toString());
    } catch {
      // 수식이 오류인 경우 "Error" 표시
      setResult("Error");
    }
  };

  // "AC" 버튼을 눌렀을 때 입력값 및 결과를 초기화하는 함수
  const clearInput = () => {
    setInput(""); // 입력값 초기화
    setResult(""); // 결과값 초기화
  };

  // 상태 값(input, result)과 함수(handleClick, calculateResult, clearInput)를 반환하여 외부에서 사용할 수 있도록 함
  return { input, result, handleClick, calculateResult, clearInput };
};

export default useCalculatorLogic; // useCalculatorLogic 훅을 외부에서 사용할 수 있도록 export
