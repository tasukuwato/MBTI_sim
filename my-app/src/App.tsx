import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //useStateフックを初期値:9で呼びだす
  //ここでの<number>はTypeScriptのジェネリックを使用しており、数値型宣言である
  const [participantCount, setParticipantCount] = useState<number>(9);

  const renderIcons = () => {
    return Array.from({ length: participantCount }, (_, index) => (
      <img key={index} src={logo} className="App-logo" alt="role-icon" style={{ width: '50px', height: '50px', margin: '5px'}} />
    ));
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <div>
          <label htmlFor="participant-count">参加人数を選択：</label>
          <select
            id="participant-count"
            value={participantCount}
            onChange={(e) => setParticipantCount(parseInt(e.target.value))}
          >
            {[...Array(8)].map((_, i) => (
              <option key={i + 9} value={i + 9}>{i + 9}</option>
            ))}
            </select>
        </div>
        {/* アイコンの表示 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          {renderIcons()}
        </div>
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
