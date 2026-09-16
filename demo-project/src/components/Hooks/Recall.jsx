import { useState } from 'react';
const Recall = () => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        if(loading == true){
            setLoading(false);
        }
        if(loading == false){
            setLoading(true);
        }
    };
  return ( 
    <>
        {
            loading == true ? (
                <h1>Loading...</h1>
            ) : (
                <h1>Loaded</h1>
            )
        }
        <button onClick={handleClick}>click here</button>
    </>
  )
}

export default Recall
