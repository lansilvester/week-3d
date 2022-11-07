import { useState } from "react";

// Membuat hook sendirii 😃🙌🏻
const useInput = () => {
    const [value, setValue] = useState('');
    const handleValueChange = event => {
        setValue(event.target.value);
    }

    return [value, handleValueChange];
};

export default useInput;