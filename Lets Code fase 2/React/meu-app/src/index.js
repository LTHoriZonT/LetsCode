import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './components/Formulario';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Formulario>
    </Formulario>
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
