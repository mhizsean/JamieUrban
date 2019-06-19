import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import About from './components/About/about';
import Gallery from './components/Gallery/gallery';
import Jobs from './components/Jobs/jobs.js';
import Contact from './components/Contact/contact';
import Layout from './hoc/Layout/layout';

 class Routes extends Component {
     render(){
         return(
             <Layout>
                <Switch>
                  <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/jobs" component={Jobs}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
             </Layout>
         )
     }

 }
 export default Routes;