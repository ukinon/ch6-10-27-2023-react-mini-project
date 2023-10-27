import Header from "../src/components/Header";
import Calculator from "../src/components/Calculator";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10,
  });

  const durationIsValid = userInput.duration > 0;

  function handleUserInput(inputKey, newValue) {
    setUserInput((existingUserInput) => {
      return {
        ...existingUserInput,
        [inputKey]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Calculator onChangeProps={handleUserInput} userInput={userInput} />
      {!durationIsValid && <p className="center">duration is not valid</p>}
      {durationIsValid && <Result resultInput={userInput} />}
    </>
  );
}

export default App;
