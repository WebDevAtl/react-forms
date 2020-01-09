import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Radio from '../src/components/Radio';
import Dropdown from '../src/components/Dropdown.jsx'
import Checkbox from '../src/components/Checkbox.jsx'

function App() {
  return (
    <div className="App">
      <Radio />
      <Dropdown/>
      <Checkbox />
    </div>
  );
}

export default App;


