import React from 'react';

class App extends React.Component{
  render(){
    return (
      <>
        <p>
        Meu Primeiro paragrafo!
      </p>
      <p>
        Meu segundo paragrafo!
      </p>
      <p>
        {new Date().toLocaleDateString("pt-br")}
      </p>
      </>
      
    );
  }
}

export default App;