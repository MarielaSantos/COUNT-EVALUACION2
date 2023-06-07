import { useState } from "react";
import './Contador.css'


const Contador = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>Count App</h1>

            <h2>{contador}</h2>


            <button className="disminuir" onClick={ () => setContador (contador-1)}>Disminuir</button>
            
            <button className="resetear" onClick={ () => setContador (0)}>Resetear</button>
            
            <button className="aumentar" onClick={ () => setContador (contador+1)}>Aumentar</button>
        </div>
    )
}

export default Contador;