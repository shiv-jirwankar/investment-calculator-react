import { useState } from "react";
import { Header } from "./components/header";
import { InputGroup } from "./components/input-group";
import { Result } from "./components/result";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const inputValues = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  };

  const handleInitialInvestment = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setInitialInvestment(newValue);
  };

  const handleAnnualInvestment = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setAnnualInvestment(newValue);
  };

  const handleExpectedReturn = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setExpectedReturn(newValue);
  };

  const handleDuration = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setDuration(newValue);
    console.log(inputValues);
  };

  return (
    <div>
      <Header />
      <InputGroup
        onInitialInvestment={handleInitialInvestment}
        onAnnualInvestment={handleAnnualInvestment}
        onExpectedReturn={handleExpectedReturn}
        onDuration={handleDuration}
      />
      <Result inputValues={inputValues} />
    </div>
  );
}

export default App;
