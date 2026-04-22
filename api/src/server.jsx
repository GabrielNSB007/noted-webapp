/* eslint-disable no-unused-vars */
import express from "express";
import cors from "cors";
import prisma from "./config/database";
const app = express()

app.use(cors())
app.use(express.json())

//ROUTES



app.listen(5000, () => {
    console.log("server has started on port 5000")
})