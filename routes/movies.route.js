import express from 'express'
import { createMovies, getMovies, updateMovies, deleteMovies, specificMovie } from '../controllers/movies.controller.js';

const MovieRouter = express.Router();

// C - create for movies
MovieRouter.post('/', createMovies)

//R - read for movies list
MovieRouter.get('/', getMovies)

// U - update for movies
MovieRouter.put('/:id', updateMovies)

//D - delete for movies
MovieRouter.delete('/:id', deleteMovies)

//S - specific search for moviesList
MovieRouter.get("/:id", specificMovie)

export default MovieRouter;