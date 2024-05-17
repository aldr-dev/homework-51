import './App.css';
import Ball from './components/Ball/Ball';
import {useState} from 'react';

const App = () => {
    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

    return (
        <div className="lotteries-container">
            <button className="lotteries-btn" type="button">New numbers</button>
            <div className="lotteries-balls-list">
                {numbers.map((number) => (
                    <Ball number={number}/>
                ))}
            </div>
        </div>
    );
};

export default App;