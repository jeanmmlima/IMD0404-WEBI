import {useContext} from 'react'
import { MyContext } from '../context/MyContext';

function Display(){

    const {count} = useContext(MyContext);

    return(
    <div style={{border: "1px dotted orange", padding:"10px"}}>
        <h5>Valor do contador: {count}</h5>
    </div>
    );

}

export default  Display;