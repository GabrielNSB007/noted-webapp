import express from "express";
import NoteController from "../services/NoteController";
//import UserController from "../services/UserController"
//import middleware later

const router = express.Router()

// ensure the controller method is called with the correct req, res, next
router.post("/notes", (req, res, next) => NoteController.create(req, res, next));
router.get("/notes", (req, res, next) => NoteController.listNotes(req, res, next));
router.put("/notes", (req, res, next) => NoteController.update(req, res, next));
router.delete("/notes", (req, res, next) => NoteController.delete(req, res, next));


export default router;