import React, {Component} from 'react';
import './App.scss';
import Navigation from './components/navigation/navigation';
import Maincontent  from './components/content/main-content';

class App extends Component {
  constructor(){
    super();
  }

  
  render() {
    return(
      <div className="App">
          <Navigation />
          <Maincontent />
      </div>
    )
   
  }
}

export default App


