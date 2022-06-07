import express  from "express";
import path from "path";
import {books} from './add-book'

const routes = express.Router()

routes.use((req, resp)=>{

    resp.sendFile(path.join(__dirname, '..', 'view', 'books.html'))
    console.log(books)
})

export default routes