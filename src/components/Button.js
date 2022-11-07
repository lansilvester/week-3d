import { memo, useEffect, useState } from "react";

const Button = ({text, handleClick}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Button has been rendered');
    });

    return (
        <button onClick={handleClick}>
            Click Me {text} {count}
        </button>
    )
}

export default memo(Button);