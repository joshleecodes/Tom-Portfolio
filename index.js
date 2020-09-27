//package imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//component imports
import './index.scss';
import Sidebar from './components/layout/sidebar/Sidebar';
import Header from './components/layout/header/Header'; 
import Landing from './components/content/Landing/Landing';
import About from './components/content/About/About';
import ESports from './components/content/ESports/ESports';
import Media from './components/content/Media/Media';
import Engineering from './components/content/Engineering/Engineering';

const routes = (
  <BrowserRouter>
    <div className="site__wrapper">
      <Sidebar className="sidebar"/>
      <section className="content__wrapper">
        <Header className="header" activeSection="none"/>
        <div className="content-body__wrapper">
          <Switch >
            <Route exact path="/" >
              <Landing />
            </Route>
            <Route exact path="/About" >
              <About />
            </Route>
            <Route exact path="/ESports" >
              <ESports />
            </Route>
            <Route exact path="/Media" >
              <Media />
            </Route>
            <Route exact path="/Engineering" >
              <Engineering />
            </Route>
          </Switch>
        </div>
      </section>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes ,document.getElementById('root'));