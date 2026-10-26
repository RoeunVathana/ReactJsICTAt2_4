
import { useState, useRef } from 'react'
const HookOne = () => {

    const [count, setCount] = useState(0)
    const ref  = useRef(0)

    const handleCount = () => {
        setCount(count + 1)
        ref.current++;
    }

    return (
        <>
            <div className='d-flex justify-content-center algin-item-center flex-column' 
                style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
                <div>
                    <h1>{"Count: " + ref.current}</h1>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={handleCount}>Count</button>
                </div>
            </div>
        </>
    )
}

export default HookOne