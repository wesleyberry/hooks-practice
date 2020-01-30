import React, {useState} from 'react'
import HookMouseReview from './HookMouseReview';

function MouseContainerReview() {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouseReview />}
        </div>
    )
}

export default MouseContainerReview
