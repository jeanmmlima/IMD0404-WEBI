import {useContext} from 'react'
import { MyContext } from '../context/MyContext'

export const CounterButtons = () => {


    const {increment, decrement} = useContext(MyContext);

    const handleIncrementar = () => {
        increment();
    }

    return(

        <div style={{border: "2px solid purple", padding: "20px", margin: "20px"}}>
            <button style={{width: '80px', padding: "10px", margin: "10px"}} onClick={handleIncrementar}>+</button>
            <button style={{width: '80px', padding: "10px", margin: "10px"}} onClick={decrement}>-</button>
        </div>

    );

}