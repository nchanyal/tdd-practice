import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleAddButtonClick = () => {
        setCounter((oldValue) => oldValue + 1);
    };

    const handleRemoveButtonClick = () => {
        if(counter > 0) setCounter((oldValue) => oldValue - 1);
    };

    return (
        <div>
            <h1 data-testid="title">Awesome Counter</h1>
            <div>
                <button data-testid="add" onClick={handleAddButtonClick}>Add</button>
                <div data-testid="counter">{counter}</div>
                <button data-testid="remove" onClick={handleRemoveButtonClick}>Remove</button>
            </div>
        </div>
    );
}

export default Counter;