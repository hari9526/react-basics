import React, {useEffect, useState} from 'react'; 

const FunctionalComponent = () => {
    const [count, setCount] = useState(220); 
    
    useEffect({
        
    }, []); 
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count = { count}</button>
        </div>
    );
}

export default FunctionalComponent; 