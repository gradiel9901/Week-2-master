import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({
        increment: { top: 0, left: 0 },
        decrement: { top: 0, left: 0 },
        reset: { top: 0, left: 0 },
    });

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    const moveButton = (button) => {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        setButtonPosition((prevPosition) => ({
            ...prevPosition,
            [button]: {
                top: prevPosition[button].top + randomY,
                left: prevPosition[button].left + randomX,
            },
        }));
    };

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">REACH 10!</h1>
            <h2 className="mb-4">Counter: {count}</h2>

            <div className="d-flex justify-content-center mb-3">
                <button
                    className="btn btn-primary mx-2"
                    onClick={increment}
                    onMouseEnter={() => moveButton('increment')}
                    style={{
                        position: 'relative',
                        top: `${buttonPosition.increment.top}px`,
                        left: `${buttonPosition.increment.left}px`,
                    }}
                >
                    Increment
                </button>

                <button
                    className="btn btn-warning mx-2"
                    onClick={decrement}
                    onMouseEnter={() => moveButton('decrement')}
                    style={{
                        position: 'relative',
                        top: `${buttonPosition.decrement.top}px`,
                        left: `${buttonPosition.decrement.left}px`,
                    }}
                >
                    Decrement
                </button>

                <button
                    className="btn btn-danger mx-2"
                    onClick={reset}
                    onMouseEnter={() => moveButton('reset')}
                    style={{
                        position: 'relative',
                        top: `${buttonPosition.reset.top}px`,
                        left: `${buttonPosition.reset.left}px`,
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
