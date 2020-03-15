import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Maincontent  from './components/content/main-content';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Maincontent />
    </div>
  );
}

export default App;
