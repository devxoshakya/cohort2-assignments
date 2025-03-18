import React, { useState, useRef } from 'react';

export function Assignment2() {
    const renderCount = useRef(0);
    const [, forceRender] = useState(0);
    
    // Increment the render count
    renderCount.current = renderCount.current + 1;
    const handleReRender = () => {
        forceRender(Math.random());
    };
    return (
        <div>
            <p>This component has rendered {renderCount.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};