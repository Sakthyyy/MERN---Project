//Main.js for Movies
import express from "express"
import MovieRouter from "./routes/movies.route.js";
import cors from 'cors'
import { connectionDB } from "./lib/db.js";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Database
connectionDB();

app.use("/movies", MovieRouter)

app.listen(port, () => console.log(`listening port : http://localhost:${port}/movies`));