import { useState } from "react"
const UseToggle = (init) =>{

    const [show, setShow] = useState(init);

    // const toggle = () => setShow(!show);
    function toggle(){
        setShow(!show)
    }


    return {show, toggle};
}

export default UseToggle