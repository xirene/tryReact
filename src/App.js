import React from 'react';
import './App.scss';

function App() {
  const name = '리액트';
  return (
    <div className="react">
      <h2 class="react-title">{name || '리액트'}</h2>
    </div>
  );
}

export default App;
