import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: String,
    content: String
});


const Note = mongoose.model("note", noteSchema);


export default Note;