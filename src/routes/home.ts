import express from 'express'
import path from 'path'

const routes = express.Router()
routes.get('/',(req: any, resp: any): void => {
    resp.sendFile(path.join(__dirname, '..', 'view', 'home.html'))
    
})
export default routes