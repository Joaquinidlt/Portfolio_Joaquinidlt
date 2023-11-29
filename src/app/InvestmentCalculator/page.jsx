"use client"
import { Fragment, useState } from "react"
import Header from './components/Header'
import InputComponent from "./components/InputComponent";
import Results from "./components/Results";
import InvestmentChart from "./components/InvestmentChart";

const InvestmentCalculator = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid =  userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      }
    });
  }


  return (
    <section id="investmentCalculator" className="flex flex-col justify-center">
      <Header/>
      <main>
        <section className="w-[700px] p-[1rem] my-[2rem] mx-auto rounded bg-[#307e6c]">
          <div className="flex justify-evenly gap-[1.5rem]">
              <InputComponent 
                label={'INITIAL INVESTMENT'} 
                value={userInput.initialInvestment}  
                inputIdentifier={'initialInvestment'}
                onChangeValue={handleChange}/>
              <InputComponent 
                label={'ANNUAL INVESTMENT'} 
                value={userInput.annualInvestment} 
                inputIdentifier={'annualInvestment'}
                onChangeValue={handleChange}/>
              <InputComponent 
                label={'EXPECTED RETURN %'} 
                value={userInput.expectedReturn} 
                inputIdentifier={'expectedReturn'}
                onChangeValue={handleChange}/>
              <InputComponent 
                label={'DURATION'} 
                value={userInput.duration} 
                inputIdentifier={'duration'}
                onChangeValue={handleChange}/>
          </div>
        </section>
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero.</p>
        )}
        {inputIsValid && <InvestmentChart data={userInput} />}
        {inputIsValid && <Results userInput={userInput}/>}
        
      </main>
    </section>
  )
}

export default InvestmentCalculator
