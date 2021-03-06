import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Nav, Header, Index, About, Users } from './containers';

const Routes = () => (
  <div> 
    <Route path="/" exact component={Index} />
    <Route path="/about/" component={About} />
    <Route path="/users/" component={Users} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <section className='app'>  
      <Header/>
    
      <Routes/>
    </section>
  </BrowserRouter>
);

export default App; 