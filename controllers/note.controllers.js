import Note from "../schemas/note.schema.js";



export const addNote = async(req, res)=>{
   const data = req.body;

   const newNote = new Note(data);

   try {
        await newNote.save();
        res.status(201).json(newNote);

   } catch (error) {
        res.status(409).json({message: error.message});
   }
}


export const getNotes = async(req, res)=>{
    try {
        const allNotes = await Note.find();
        res.status(200).json(allNotes);
    } catch (error) {
       res.status(404).json({message: error.message});
    }
}

export const deleteNote = async(req, res)=>{
    const id = req.params.id;
    try {
        await Note.deleteOne({_id: id});
        res.status(200).json({message: "Note is deleted"});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}