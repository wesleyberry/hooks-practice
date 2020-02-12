import React, { useState } from 'react';

function JFListener() {

    let [count, setCount] = useState(0);
    let [name, setName] = useState({firstName: '', lastName: ''});

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>Increment</button>
            <h2>{count}</h2>
            <input 
                type="text"
                placeholder="First Name"
                value={name.firstName}
                onChange={e => setName({...name, firstName: e.target.value})}
            />
            <input 
                type="text"
                placeholder="Last Name"
                value={name.lastName}
                onChange={e => setName({...name, lastName: e.target.value})}
            />
            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
        </div>
    )
}

export default JFListener;
// ----------------------------------
