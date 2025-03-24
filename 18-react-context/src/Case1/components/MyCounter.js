import {useContext} from 'react'
import { MyContext } from '../context/MyContext';
import Display from './Display';
import { CounterButtons } from './CounterButtons';
import ValueForm from './ValueForm';

function MyCounter(){



    return(
        <div style={{border: "2px solid green", padding: "20px", margin: "10px"}}>
            <Display />
            <CounterButtons />
        </div>
    );

}

export default MyCounter;