import { model, Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    actor: String
})

export const moviesValidate = model("movie", schema)