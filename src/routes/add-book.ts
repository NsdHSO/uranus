import exporess  from "express";
import path from "path";
export const routes = exporess.Router()

export const books: {title: string}[] = []

routes.get("/added-book",(req, resp) =>{
    resp.sendFile(path.join(__dirname, ".." ,"view", 'added-book.html'))
})

routes.post('/added-book', (req: any, resp:any) => {

    books.push({title: req.body.bookTitle})


    resp.redirect('/')
    
})

exports.routes = routes
