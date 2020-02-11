import React, { useState } from 'react'

function HookInput() {

    let [name, setName] = useState({firstName: '', lastName: ''});
    let [count, setCount] = useState(0);

    return (
        <div>
            <input 
                type="text" 
                value={name.firstName} 
                placeholder='First Name'
                onChange={e => setName({...name, firstName: e.target.value})}
            />
            <input 
                type="text" 
                value={name.lastName} 
                placeholder='Last Name'
                onChange={e => setName({...name, lastName: e.target.value})}
            />
            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default HookInput
