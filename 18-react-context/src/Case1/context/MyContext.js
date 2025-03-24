
import {createContext, useState} from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {

    const [count,setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    function setValue(value){
        setCount(value);
    }

    return (
        <MyContext.Provider value={{ count, increment, decrement, setValue }}>
          {children}
        </MyContext.Provider>
      );

}

export {MyContext, MyProvider};