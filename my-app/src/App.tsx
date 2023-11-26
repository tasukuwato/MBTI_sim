import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //useStateフックを初期値:9で呼びだす
  //ここでの<number>はTypeScriptのジェネリックを使用しており、数値型宣言である
  const [playerCount, setPlayerCount] = useState<number>(9);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Select the number of players for the game:
        </p>


        <select  
        //selectタグでプルダウンを実装
          value={playerCount}
          onChange={(e) => setPlayerCount(parseInt(e.target.value))}
        >
        
          {[9, 10, 11, 12, 13, 14, 15, 16].map(num => (
            //プルダウンで選択可能な数字の候補
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <p>Number of Players: {playerCount}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
