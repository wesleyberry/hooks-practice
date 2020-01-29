import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition);
        return () => {
            console.log("Component unmounting code");
            window.removeEventListener('mosuemove', logMousePosition);
        }
    }, []);

    const logMousePosition = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
