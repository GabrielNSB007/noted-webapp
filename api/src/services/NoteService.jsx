/* eslint-disable no-unused-vars */
import NoteModel from "../models/NoteModel";

const NoteService = {
    createNote: async (data) => {
        const note = await NoteModel.createNote(data)
        
        return {
            note: note
        }
    },

    listNotes: async () => {
        const list = await NoteModel.listNotes
        
        return list
    },

    updateNote: async (id, data) => {
        const noteToUpdate = await NoteModel.listNotes()

        const noteUpdated = await NoteModel.updateNote(id, data)
    },

    deleteNote: async (id) => {
        await NoteModel.deleteNote(id)
    }
    
}

export default NoteService