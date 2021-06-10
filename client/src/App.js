import React, { Fragment, useEffect, Component } from 'react';
import Header from "./components/Header/Header.js";
import Footer from './components/Footer/Footer.js';
// import ProjectContainer from './components/ProjectContainer/ProjectContainer.js';

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {

  render() {

    return (
      <Fragment>
        
        <header>
          <Header />
        </header>

        <footer>
          <Footer />
        </footer>

      </Fragment>
    );
  }
}

export default App;
