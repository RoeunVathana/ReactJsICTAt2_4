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

    const [arr_obj, setArr_obj] = useState([]);
    function handleSetPerson(){
        setArr_obj([
            {name: "new Person", age: 20},
            {name: "new Person1", age: 20},
            {name: "new Person2", age: 20},
        ])
    }

    return (
        <>
            <div>
                <h2>Array of Objects:</h2>
                <button onClick={handleSetPerson}>Add New person</button>
                <ul>
                    {
                        arr_obj.length > 0 ? (
                            arr_obj.map((person, index) => (
                                <li key={index}>
                                    <p>Name: {person.name}</p>
                                    <p>Age: {person.age}</p>
                                </li>
                            ))
                        ):(
                            <li>empty data</li>
                        )
                    }
                </ul> 
            </div>
        </>
    )
}

export default UseState