import React, {useState, useEffect} from 'react'

function HookMouseReview() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        window.addEventListener('mouseover', logMousePosition);
        return () => {
            window.removeEventListener('mouseover', logMousePosition);
        }
    }, []);

    const logMousePosition = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <div>
            <h2>X - {x}</h2>
            <h2>Y - {y}</h2>
        </div>
    )
}

export default HookMouseReview
