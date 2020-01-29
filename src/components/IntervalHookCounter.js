import React, {useState, useEffect} from 'react';

function IntervalHookCounter() {

    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <button onClick={() => tick()}>Increment</button>
            {count}
        </div>
    )
}

export default IntervalHookCounter;
