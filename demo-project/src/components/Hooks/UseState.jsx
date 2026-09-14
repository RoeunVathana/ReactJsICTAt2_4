import { useState } from 'react'
const UseState = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // setCount((pre) => pre + 1 == 4 ? "Count is 4" : pre + 1);
        setCount(count + 1);
    };

    const [obj, setObj] = useState({});

    function handleSetObj() {
        setObj({ name: "John", age: 30 });
    }

    const [arr_obj, setArr_obj] = useState([
        { name: "John", age: 30},
        { name: "Jane", age: 25},
    ]);
    function handleSetPerson(){}

    return (
        <>
            <div>
                <h2>Array of Objects:</h2>
                <button onClick={handleSetPerson}>Add New person</button>
                <ul>
                    {
                        arr_obj.map((item, index) => (
                            <li key={index}>
                                Person: {item.name}, Age: {item.age}
                            </li>
                        ))
                    }
                </ul> 
            </div>
        </>
    )
}

export default UseState