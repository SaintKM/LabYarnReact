import React from 'react';
import './App.css';
import WordCard from './WordCard';
const word = ["hello", "equivalent", "balanced", "peace", "graduate", "respect", "optimistic"];
var random = Math.floor(Math.random() * word.length);
function App() {
 return (
  <div className="App">
    <h1>Arrange these characters.</h1>
    <WordCard value={word[random]}/>
  </div>
 );
}
export default App;
