import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import {TodoPage} from './pages/TodoPage';
import {UsersPage} from './pages/UsersPage';

const App: React.FC = () => {
  const styles = {
    logo: {
      height: '15vh'
    }
  };
  
  return (
    <Router>
      <div>
        <header>
          <img src={logo} alt="logo" style={styles.logo}/>
          <ul>
            <li>
              <Link to="/todo">To do Page</Link>
            </li>
            <li>
              <Link to="/users">Users Page</Link>
            </li>
            <li>
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
            </li>
          </ul>
          <hr/>
        </header>
        <Switch>
          <Route path="/todo" component={TodoPage}/>
          <Route path="/users" component={UsersPage}/>
          <Redirect exact from="/" to="/todo"/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
