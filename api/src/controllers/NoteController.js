/* eslint-disable no-unused-vars */
import { text } from "express";
import NoteService from "../services/NoteService";

const NoteController = {

    create : async (req,res) =>{

       try {
            const data = {
                ...req.body,
                noteDate: new Date(req.body.noteDate)
            }

            const result = await NoteService.createNote(data)

            res.status(201).json(result)

        }catch(error) {
            res.status(400).json(("ERRO AO CRIAR NOTA"))
        }
 
    },

    listNotes: async (req,res) => {

      try {

            const result = await NoteService.listNotes()

            res.status(200).json(result)

        }catch(error) {
            res.status(400).json(("ERRO AO LISTAR NOTAS"))
        }
 
    },

    update : async (req, res) => {

        try {
            
            const noteId = Number(req.params.id)
            const data = req.body

            const result = await NoteService.updateNote(noteId, data)
            res.status(201).json(result)
        } catch(error){
            res.status(400).json(("ERRO AO ATUALIZAR NOTA"))
        }
    },

    delete : async (req,res) => {

        try {
            const noteId = Number(req.params.id)

            const result = await NoteService.deleteNote(noteId)

            res.status(200).json(result)
        }catch(error){
            res.status(400).json(("FALHA AO DELETAR NOTA"))
        }
    }
        

}

export default NoteController