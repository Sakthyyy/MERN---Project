import { moviesValidate } from "../model/movies.model.js"

// C - create for movies
export const createMovies = async (req, res) => {
    try {
        const addMovie = new moviesValidate({
            name: req.body.name,
            actor: req.body.actor
        })
        const movie = await addMovie.save();
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//R - read for movies list
export const getMovies = async (req, res) => {
    try {
        const MovieList = await moviesValidate.find({})
        res.status(200).json(MovieList);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// U - update for movies
export const updateMovies = async (req, res) => {
    try {
        const updateMovie = await moviesValidate.findByIdAndUpdate(
            { _id: req.params.id },
            {
                name: req.body.name,
                actor: req.body.actor
            },
            {
                new: true
            }
        );
        res.status(200).json(updateMovie)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//D - delete for movies
export const deleteMovies = async (req, res) => {
    try {
        await moviesValidate.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: `Deleted successfully` })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Search Movie Specific
export const specificMovie = async (req, res) => {
    try {
        const specificMovie = await moviesValidate.findById(req.params.id);
        res.status(200).json(specificMovie);
    } catch (error) {
        res.status(404).json({ message: "Movie not Found" })
    }

}