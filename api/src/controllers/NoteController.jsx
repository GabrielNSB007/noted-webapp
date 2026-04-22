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
            res.status(400).json(text("ERRO AO CRIAR NOTA"))
        }
 
    }
        

}