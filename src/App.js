import React, { useState } from 'react';

function HelloWorld () {
    const [number, addNumber] = useState(1);

    return <div>
        <h3>React SSR</h3>
        <div>{`当前值${number}`}</div>
        <button onClick={() => addNumber(number + 1)}>累加器</button>
    </div>
}

export default <HelloWorld/>;