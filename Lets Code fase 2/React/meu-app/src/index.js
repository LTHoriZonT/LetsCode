import React from 'react';
import ReactDOM from 'react-dom';
import {Lista2, Item} from './components/Lista2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Lista2>
    <Item key={999} id={999} completo={true}>teste</Item>
    <Item key={1000} id={1000} completo={false}>teste2</Item>
    </Lista2>
  </React.StrictMode>,
  document.getElementById('root')
);

/*Qualquer coisa que você colocar entre a abertura e o fechamento das tags do componente serão passados como props.children para o componente! Isso inclui HTML, outros componentes, e até javascript, contanto que esteja entre chaves.
<App2 title="Titulo2"> 
Conteudo << aqui
</App2>
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
