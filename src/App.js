// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import './main.scss';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/admin" element={<Admin />} />
                <Route
                    path="/admin/trial"
                    element={<AddEditTrial trials={trials} />}
                />
                <Route
                    path="/admin/round"
                    element={<AddEditRound trials={trials} rounds={rounds} />}
                /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
