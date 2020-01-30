import React, {useState, useEffect} from 'react'

function IntervalHookCounterReview() {

    const [count, setCount] = useState(0);

    const tick = () => setCount(prevCount => prevCount + 1);

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default IntervalHookCounterReview
