import React, {useState, useEffect} from 'react'

function HookPractice() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstName: '', lastName: ''});
    const [items, setItems] = useState([]);

    useEffect(() => {
        document.title = count;
    }, [count]);

    // const addItem = () => {
    //     setItems([...items, {
    //         id: items.length + 1,
    //         value: Math.floor(Math.random() * 10) + 1
    //     }]);
    // }

    return (
        <div>
            {/* <button onClick={() => setCount(count + 1)}>Count: {count}</button> */}
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
            <h2>Your first name is... {name.firstName}</h2>
            <h2>Your last name is... {name.lastName}</h2>
            {/* <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default HookPractice
