import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from 'GlobalStyles';
import { CurriculumVitae } from 'components/CurriculumVitae/CurriculumVitae';
import { Home } from 'components/Home/Home';
import { ResumeDataProvider } from 'contexts/ResumeContext/ResumeDataProvider';
import 'react-toastify/dist/ReactToastify.min.css';

const App = (): ReactElement => {
  return (
    <ResumeDataProvider>
      <Router>
        <div className='App'>
          <GlobalStyle />
          <Switch>
            <Route path='/resume'>
              <CurriculumVitae />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          <ToastContainer position='bottom-right' autoClose={5000} />
        </div>
      </Router>
    </ResumeDataProvider>
  );
};

export default App;
