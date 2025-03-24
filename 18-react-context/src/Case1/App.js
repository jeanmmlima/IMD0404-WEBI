
import { useContext } from 'react'
import { MyContext } from './context/MyContext';
import MyCounter from './components/MyCounter';
import ValueForm from './components/ValueForm';

export default function App(){

    const { count } = useContext( MyContext );


    return(
        <>
        <div style={{border: '1px solid blue', padding: '20px', textAlign: 'center'}}>
            <h1>Contagem Principal: {count}</h1>
        </div>
        <div style={{border: "1px solid red", padding: "20px"}}>
            <h3>Contadores secundários</h3>
            
            <MyCounter />
            <MyCounter />
            <MyCounter />
            <ValueForm />
        </div>
        </>
    );

}