import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
