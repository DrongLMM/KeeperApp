import express from "express";
import { addNote, getNotes, deleteNote } from "../controllers/note.controllers.js";


const route = express.Router();

route.post("/addnote", addNote);

route.get("/addnote", getNotes);

route.delete("/:id", deleteNote);






export default route;