import { project } from "../../data/data"

export default function handler(req, res) {
    if(req.method === 'GET') {
        var data = project
        res.status(200).json(data)
    }
    else {
        res.status(400).json({message: "Bad Request"})
    }
} 
