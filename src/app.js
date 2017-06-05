import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/layout/Home';
import Header from './components/layout/Header';


class App extends React.Component{
  constructor(){
    super();
    console.log("App:constructor()");
  }

  render(){
    return(
      <div>
      <Header/>
       <Home/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
