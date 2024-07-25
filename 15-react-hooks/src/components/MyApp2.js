
import { useState } from "react";
import MyButton2 from "./MyButton2";

function MyApp2(){

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);
    }

    return(
    <div>
        <p>Contadores</p>
            <MyButton2 count={count} onClick={handleClick}/>
            <br />
            <MyButton2 count={count} onClick={handleClick} />
    </div>
    );
}

export default MyApp2;