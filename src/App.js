import React from 'react';
import Home from './components/pages/Home';
import RoadmapPage from './components/pages/RoadmapPage';
import DataState from './context/data/DataState';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <main className='main-app'>
        <DataState>
          <Routes>
            <Route exact path='/'  element={<Home />} />
            <Route exact path='/roadmappage'  element={<RoadmapPage />} />
          </Routes>
        </DataState>
      </main>
    </Router>
  );
};

export default App;
