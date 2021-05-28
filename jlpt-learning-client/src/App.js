import React from 'react';

import './App.css';
import Menu from './containers/Menu/Menu';
import Footer from './containers/Footer/Footer';
import UserProvider from './components/UserProvider'

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Menu />
      </div>
    </UserProvider>
    
  );
}

export default App;
