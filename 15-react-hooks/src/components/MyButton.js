import { useState } from "react";

function MyButton(){

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }

    return(
    <div>
     <p>Valor: {count}</p>
     <button onClick={handleClick}>Contar</button>
    </div>
    );
}

export default MyButton;