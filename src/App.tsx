import './App.css';
import Ball from './components/Ball/Ball';
import {useState} from 'react';

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const generateRandomNumbers = (): void => {
        const arrayNumbers:number[] = [];
        for (let i = 0; i < numbers.length; i++) {
            const number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
            arrayNumbers.push(number);
        }
        arrayNumbers.sort((a, b) => a - b);
        setNumbers(arrayNumbers);
    };

    return (
        <div className="lotteries-container">
            <button onClick={generateRandomNumbers} className="lotteries-btn" type="button">New numbers</button>
            <div className="lotteries-balls-list">
                {numbers.map((number, index) => (
                    <Ball key={index} number={number}/>
                ))}
            </div>
        </div>
    );
};

export default App;