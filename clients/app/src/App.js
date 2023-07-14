import React from 'react';
import JobList from './Components/jobList';
import JobAdd from './Components/jobAdd';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<JobList/>} />
          <Route path='/add' element={<JobAdd/>} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
