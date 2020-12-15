import React from 'react';
import { Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';

export default (<div>
    <Route path="/" exact component={Index}></Route>
    <Route path="/about" exact component={About}></Route>
</div>);