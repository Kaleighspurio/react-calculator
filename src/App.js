import React from 'react';
import Header from './components/Header';
import CalcBody from './components/CalcBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <CalcBody/>
    </div>
  );
}

export default App;
