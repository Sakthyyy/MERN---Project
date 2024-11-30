//Main.js for Movies
import express from "express"
import MovieRouter from "./routes/movies.route.js";
import { connectionDB } from "./lib/db.js";

const app = express();
const port = 3000;
app.use(express.json())

//Database
connectionDB();

app.use("/movies", MovieRouter)

app.listen(port, () => console.log(`listening port : http://localhost:${port}/movies`));