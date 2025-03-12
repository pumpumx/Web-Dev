import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.get('/jokes',(req ,res)=>{
    const jokes = [
        {
            id:1,
            title: "joke1",
            content: "joke content",
        },
        {
            id:2,
            title: "joke1",
            content: "joke content",
        },
        {
            id:3,
            title: "joke1",
            content: "joke content",
        },
        {
            id:4,
            title: "joke1",
            content: "joke content",
        }
    ]
    res.send(jokes);
})


const port  =   process.env.PORT || 3000

app.listen(port , ()=>{
    console.log(`Server is running at port ${port}`)
})
