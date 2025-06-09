import { useState } from "react";

function MyButton(){


    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    return(
    <div>
     <p>Valor: {count}</p>
     <button onClick={increment}>Contar</button>
    </div>
    );
}

export default MyButton;