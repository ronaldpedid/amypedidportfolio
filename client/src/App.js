import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './views/home/Home';
import { Navigation } from './components/navigation/Navigation';
import styles from '../index.scss';
import { WalmartContent } from './views/campaigns/walmart/Walmart';
import { TribeContent } from './views/campaigns/tribe/Tribe';
import { About } from './views/about/About';
import { CaribouContent } from './views/campaigns/caribou/Caribou';
import { ShoptologyContent } from './views/campaigns/shoptology/Shoptology';
import Footer from './components/footer/Footer';

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.naked}>
          <div className={styles.siteWrapper}>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/walmart" component={WalmartContent} />
              <Route path="/tribe" component={TribeContent} />
              <Route path="/caribou" component={CaribouContent} />
              <Route path="/shoptology" component={ShoptologyContent} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />

            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
