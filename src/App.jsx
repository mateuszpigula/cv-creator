import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { CurriculumVitae } from './components/CurriculumVitae/CurriculumVitae';
import { Home } from './components/Home/Home';
import { ResumeDataProvider } from './contexts/ResumeContext/ResumeDataProvider';

const App = () => {
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
        </div>
      </Router>
    </ResumeDataProvider>
  );
};

export default App;
