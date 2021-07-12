import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';

import reportWebVitals from './reportWebVitals';
import GameListScene from './scenes/Games/GameListScene';
import GameScene from './scenes/Games/GameScene';
import MainScene from './scenes/Main';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={MainScene} />
        <Route exact path="/games" component={GameListScene} />
        <Route exact path="/game/:game_id" component={GameScene} />
      </Switch>
    </Router>
    <Footer />
    <div id="tsparticles" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
