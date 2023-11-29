import Image from 'next/image'
import InvestCalculatorImg from '../assets/investment-calculator-logo.png'
export default function Header() {
    return (
        <header className='text-center my-[3rem] mx-auto '>
            <Image src={InvestCalculatorImg} className='w-96' alt="investment-calculator-logo"/>
            <h1 className='text-[2.5rem] text-[#307e6c]'>Investment Calculator</h1>
        </header>
    )
}