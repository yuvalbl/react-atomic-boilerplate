import React from 'react';
import logo from './logo.svg';

const App: React.FC = () => {
  const styles = {
    logo: {
      height: '40vh'
    }
  };

  return (
    <div>
      <header>
        <img src={logo} alt="logo" style={styles.logo}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
};

export default App;
