
import { useState } from "react";
import MyButton from "./MyButton";


function MyApp(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    return(
    <div>
        <p>Contadores</p>
            <MyButton count={count} onSubmit={increment}/>
            <br />
            <MyButton count={count} onSubmit={increment}/>
    </div>
    );
}

export default MyApp;