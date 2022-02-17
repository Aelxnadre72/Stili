import React, { useState } from "react";

import "./Profile.css";


export default function Profile(){
    const [count, setCount] = useState(0);
    const initialCount = 0;
    
    return(
                
        <div className="Profile">
            
            
            
            <>
                Count: {count}
                <button onClick={() => setCount(initialCount)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </>
        </div>
    )
}