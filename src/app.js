import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/layout/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


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
       <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
