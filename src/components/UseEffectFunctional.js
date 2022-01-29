import React, {useEffect, useState} from 'react'; 

const UseEffectFunctional = () => {
    const [count, setCount] = useState(220); 
    
    useEffect(() =>{
        document.title = `You clicked : ${count}`; 
    }, [count]); 


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count = { count}</button>
        </div>
    );
}

export default UseEffectFunctional; 