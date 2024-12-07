import { model, Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    actor: String
},
    { timestamps: true })

export const moviesValidate = model("movie", schema)