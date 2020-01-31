import React, {useState} from 'react';
import MouseTeller from './MouseTeller';

function MouseTellerContainer() {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button type="button" onClick={() => setDisplay(!display)}>Toggle</button>
            { display && <MouseTeller /> }
        </div>
    )
}

export default MouseTellerContainer
