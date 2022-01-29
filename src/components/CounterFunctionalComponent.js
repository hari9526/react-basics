import React, { useState, useEffect}from 'react';

const CounterFunctionalComponent = () => {
    const [count, setCount] = useState(220); 
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count = { count}</button>
        </div>
    );
};

export default CounterFunctionalComponent;
