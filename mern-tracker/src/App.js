import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/boostrap.min.css'; 
import { Navbar, ExerciseList, EditExercise, CreateExercise, CreateUser } from './components';


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/" exact component={EditExercise} />
      <Route path="/" exact component={CreateExercise} />
      <Route path="/" exact component={CreateUser} />
    </Router>
  );
}

export default App;
