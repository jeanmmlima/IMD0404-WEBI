import { useState } from "react";

function MyButton({count, onSubmit}){

    return(
    <div>
     <p>Valor: {count}</p>
     <button onClick={onSubmit}>Contar</button>
    </div>
    );
}

export default MyButton;