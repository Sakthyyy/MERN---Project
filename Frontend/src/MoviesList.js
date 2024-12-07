import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const MoviesList = () => {
    const [data, setData] = useState([]);
    const [movieName, setMovieName] = useState('');
    const [actor, setActor] = useState('');

    // Fetch data from the API
    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/movies');
            console.log('API Response:', response.data);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    // Add movie to the database
    const addMovie = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/movies', {
                name: movieName,
                actor: actor
            });

            console.log('Movie added:', response.data);

            // Update the local data state with the new movie
            setData((prevData) => [...prevData, response.data]);
            setMovieName('');
            setActor('');
        } catch (error) {
            console.error('Error adding movie:', error.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h2 className="headingText">Movies List</h2>
            <form onSubmit={addMovie}>
                <input
                    name="name"
                    type="text"
                    placeholder="Movie Name"
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                    required
                />
                <input
                    name="actor"
                    type="text"
                    placeholder="Actor"
                    value={actor}
                    onChange={(e) => setActor(e.target.value)}
                    required
                />
                <input type="submit" value="Add Movie" />
            </form>
            <div className="container">
                {Array.isArray(data) && data.length > 0 && (
                    data.map((item, index) => (
                        <ul key={index}>
                            <li>{`Movie : ${item.name}`}</li>
                            <li>{`Actor : ${item.actor}`}</li>
                        </ul>
                    ))
                )}
            </div>
        </>
    );
};

export default MoviesList;
