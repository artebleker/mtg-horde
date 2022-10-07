import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import GamePage from './components/pages/GamePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
function App() {


  return (
    <>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/game/:gameName" element={<GamePage/>} />
    <Route path="*" element={<NotFound/>} />
    </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
