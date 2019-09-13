import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
