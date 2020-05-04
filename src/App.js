import React, {Component} from 'react';
import './App.scss';
import Navigation from './components/navigation/navigation';
import Maincontent  from './components/content/main-content';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state =  {isMobileOn: false};
    let isMobile = window.screen.width < 992 ? this.state =  {isMobileOn: true} : false;

    window.addEventListener('resize',(event)=>{
      isMobile = event.target.screen.width < 992 ? true : false;
      this.setMobileMode(isMobile);
    });
  }
  setMobileMode(isMobile){
    this.setState((state)=>({
      isMobileOn : isMobile
    }));
  }
  
  render() {
    const {isMobileOn} = this.state; 
    return(
      <>
      <div className={`App ${isMobileOn ? 'mobile' : ''}`}>
        <Router>
          <Navigation isMobile={this.state.isMobileOn}/>
          <Maincontent />
        </Router>
      </div>
      
      </>
    )
   
  }
}

export default App


