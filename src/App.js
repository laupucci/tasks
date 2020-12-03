import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { getTasks } from './actions/';
import './App.css';

//Componentes
import Tasks from './components/Tasks/Tasks';
import Task from './components/Task/Task';
import Navbar from './components/Navbar/Navbar';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/tasks'>
        <Tasks />
      </Route>
      <Route exact path='/tasks/:id' render={({ match }) => <Task id={match.params.id} />} />
    </div>
  );
}

export default App;
