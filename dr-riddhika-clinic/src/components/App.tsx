import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PatientList from './PatientList';
import PatientDetails from './PatientDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Dr. Riddhika Physio & Rehab Clinic</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/patients" component={PatientList} />
          <Route path="/patients/:id" component={PatientDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;