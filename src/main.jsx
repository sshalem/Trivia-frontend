import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App.jsx'
// import App from './projects/01-router/App-01';
// import App from './projects/02-router-with-css/App-02';
// import App from './projects/03-router-with-css-hebrew/App-03';
// import App from './projects/04-router-add-question/App-04';

import App from './projects/05-router-add-question-to-each-subject/App-05';
import { AppProvider } from './projects/05-router-add-question-to-each-subject/context/appContext';

/**
 * for projects 05 and up I use AppProvider as context wrapper component
 * so my whole app will be under the same context
 * Thus,
 * 1. If using projects from 01-04 disable the AppProvider
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppProvider>
      <App />
    </AppProvider>
  </>
  // <>
  //   <App />
  // </>
);
