import { useState } from "react";
function Funcomponent() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Componente funcional
      <p>
        <button onClick={() => setContador(contador - 1)}>-</button>
        {contador}
        <button onClick={() => setContador(contador + 1)}>+</button>
      </p>
    </div>
  );
}

export default Funcomponent;
