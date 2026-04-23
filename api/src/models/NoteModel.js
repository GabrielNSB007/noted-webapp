/* eslint-disable no-unused-vars */
import prisma from "../config/database";

const NoteModel = {
    
    createNote : async (data) => {

        return await prisma.note.create(data)
    },

    listNotes : async () => {
        return await prisma.note.findMany()
    },

    updateNote : async (id,data) => {
        return await prisma.note.update({
            where: { id: id},
            data: data
        })
    },

    deleteNote : async (id) => {
        const note = await prisma.note.delete({ where: { id : id } })
        return true
    }
}

export default NoteModel