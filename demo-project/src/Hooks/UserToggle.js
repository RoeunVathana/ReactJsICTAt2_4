import { useState } from "react"
const useToggle = (init) =>{

    const [show, setShow] = useState(init);

    const toggle = () => setShow(!show);
    
    return [show, toggle];
}

export default useToggle