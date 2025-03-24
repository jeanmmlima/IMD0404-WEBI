import {useContext, useState} from 'react';
import { MyContext } from '../context/MyContext';

function ValueForm(){

    const {count, setValue} = useContext(MyContext);

    const [myNumber, setMyNumber] = useState(0);

    const handleChangeValue = (event) => {
        const value = event.target.value;
        setMyNumber(value);
    }

    const submitValue = (event) => {
        event.preventDefault();
        setValue(parseInt(myNumber));
    }

    return(

        <div style={{border: "3px dotted lightblue", padding:"20px", margin:"10px", textAlign:"center"}}>
            <form onSubmit={submitValue}>
                <input type="text" value={myNumber} onChange={handleChangeValue}></input>
                <p>Tem certeza que deseja submeter {myNumber} ? Vai substituir {count}</p>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
    
}

export default ValueForm;