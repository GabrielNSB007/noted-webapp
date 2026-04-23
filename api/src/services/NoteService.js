import NoteModel from "../models/NoteModel";

const NoteService = {
    createNote: async (data) => {
        const note = await NoteModel.createNote(data)
        
        return {
            note: note
        }
    },

    listNotes: async () => {
        const list = await NoteModel.listNotes()
        
        return list
    },

    updateNote: async (id, data) => {

        const result = await NoteModel.updateNote(id, data)

        return result
    },

    deleteNote: async (id) => {
        
        const result = await NoteModel.deleteNote(id)

        return result
    }
    
}

export default NoteService