import React, {useState} from 'react'

function UpdateForm() {

    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <div>
            <form>
                <input 
                    value={name.firstName}
                    type="text"
                    onChange={e => setName({...name, firstName: e.target.value})}
                />
                <input 
                    value={name.lastName}
                    type="text"
                    onChange={e => setName({...name, lastName: e.target.value})}
                />
            </form>
            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
        </div>
    )
}

export default UpdateForm
