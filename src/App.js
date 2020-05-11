import React from 'react';
import './assets/fe/css/style.css'

import MainRoutes from './routers/MainRouter'

// const baseUrl = process.env.REACT_APP_MAIN_API_URL
function App() {
  // console.log(baseUrl)
  return (
    <React.Fragment>
      <MainRoutes />
    </React.Fragment>
  );
}

export default App;
