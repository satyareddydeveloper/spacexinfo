import React from 'react';
import  './styles.css';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { Launch } from './Components/Header/Launch/Launch';
import { LaunchList } from './Components/LaunchList/LaunchList.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LaunchList>
      </LaunchList>
    </div>
  );
}

export default App;
