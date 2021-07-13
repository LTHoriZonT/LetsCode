import React, {useState} from 'react';

export default function App(){
    const [nome, setNome] = useState('');
        
    return (
        <>
          nome: <input type='text' value={nome} onChange={(event) => setNome(event.target.value)}></input>
          <br/>
          Ola {nome}
        </>
    );

}