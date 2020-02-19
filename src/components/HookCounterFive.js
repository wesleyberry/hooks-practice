import React, { useState, useEffect } from 'react';


function HookCounterFive() {

    const [name, setName] = useState({firstName: '', lastName: ''});
    const [count, setCount] = useState(0);

    return (
        <div>
            <input 
                type="text" 
                value={name.firstName} 
                onChange={e => setName({...name, firstName: e.target.value})} 
            />
            <input 
                type="text" 
                value={name.lastName} 
                onChange={e => setName({...name, lastName: e.target.value})} 
            />
            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <h2>Count: {count}</h2>
        </div>
    )
}

export default HookCounterFive;