

function MyButton2({count, onClick}){

    return(
    <div>
     <p>Valor: {count}</p>
     <button onClick={onClick}>Contar</button>
    </div>
    );
}

export default MyButton2;