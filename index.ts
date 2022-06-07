import express from 'express'
import bodyParser from 'body-parser'
import {routes} from './src/routes/add-book'
import books from './src/routes/books'
import home from './src/routes/home'
const app = express()
app.set('view engine', 'pug')
app.set('views', 'src/view')

app.use(bodyParser.urlencoded({extended:false}))

app.use(home)
app.use(routes)
app.use("/books",books)


app.listen(3000)