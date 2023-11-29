import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
    const results = calculateInvestmentResults(userInput);
    const initialInvestment = 
        results[0].valueEndOfYear -
        results[0].interest -
        results[0].annualInvestment;
    return (
        <table className="w-[800px] my-[2rem] mx-auto p-[1rem] table-fixed border-spacing-[2rem] text-right">
            <thead className="font-[0.7rem] text-[#83e6c0]">
                <tr >
                    <th scope="col" className="px-[4px]">Year</th>
                    <th scope="col" className="px-[4px]">Investment Value</th>
                    <th scope="col" className="px-[4px]">Interest (Year)</th>
                    <th scope="col" className="px-[4px]">Total Interest</th>
                    <th scope="col" className="px-[4px]">Invested Capital</th>
                </tr>
            </thead>
            <tbody className="font-sans font-[0.85rem] text-[#c2e9e0]">
                {results.map((result, resultIndex) => { 
                    const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                    const totalAmountInvested = result.valueEndOfYear - totalInterest;
                    return (
                    <tr key={resultIndex}>
                        <th scope="row">{result.year}</th>
                        <th scope="row">{formatter.format(result.valueEndOfYear)}</th>
                        <th scope="row">{formatter.format(result.interest)}</th>
                        <th scope="row">{formatter.format(totalInterest)}</th>
                        <th scope="row">{formatter.format(totalAmountInvested)}</th>
                    </tr>
                    );              
                })}
            </tbody>
        </table>
    )
}