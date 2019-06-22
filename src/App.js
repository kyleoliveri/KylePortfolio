import React, { Fragment, useEffect } from 'react';
import Header from "./components/Header/Header.js";

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
}

export default App;
