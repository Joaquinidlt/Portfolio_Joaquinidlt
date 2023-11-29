import React from 'react';
import { calculateInvestmentResults } from "../util/investment";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const InvestmentChart = ({ data }) => {
    const results = calculateInvestmentResults(data);

    const newdataI = results.map((item) => {
        const newData = {
            year: item.year,
            investment: item.valueEndOfYear,
            interest: item.interest,
            annualInvestment: item.annualInvestment
        }
        return newData
    })
    const initialInvestment = 
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

    const dataWithoutInterest = newdataI.map((entry, entryIndex) => ({
        year: entry.year,
        investment: entry.investment,
        interest: entry.interest,
        annualInvestment: entry.annualInvestment,
        investmentWithoutInterest: initialInvestment + entry.annualInvestment + (entry.annualInvestment * entryIndex),
      }));
      
    const currencyFormatter = (value) => `$${value.toLocaleString()}`; // Formatea el valor como moneda

    return (
        <div className='flex justify-center w-auto my-[2rem] mx-auto p-[1rem] table-fixed border-spacing-10 text-right'>
            <LineChart width={600} height={300} data={dataWithoutInterest} margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
            <XAxis dataKey="year" />
            <YAxis tickFormatter={currencyFormatter} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip formatter={currencyFormatter} />
            <Legend />
            <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }}/>
            <Line type="monotone" dataKey="investmentWithoutInterest" stroke="#82ca9d" name="Without annual interest" />
            </LineChart>
        </div>
    );
};

export default InvestmentChart;