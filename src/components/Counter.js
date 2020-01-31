import React, {useState, useEffect} from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>{count}</h2>
        </div>
    )
}

export default Counter
