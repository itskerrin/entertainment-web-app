import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import './main.scss';

function App() {
    const axios = require('axios');
    const [moviesAndShows, setMoviesAndShows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const moviesAndShowsURL =
        'https://spmyirwfx4.execute-api.us-east-1.amazonaws.com/dev/entertainment-app';

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(moviesAndShowsURL);
                setMoviesAndShows(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    useEffect(() => {
        moviesAndShows.length > 0 ? setIsLoading(false) : setIsLoading(true);
    }, [moviesAndShows]);

    useEffect(() => {
        console.log(moviesAndShows);
    }, [moviesAndShows]);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                isLoading={isLoading}
                                moviesAndShows={moviesAndShows}
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
