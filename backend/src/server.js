import express, { json } from "express"
import dotenv from "dotenv"


const app= express();


app.get("/doctors",(req,res)=>{   ///all doctors
    res.send("welcome to expressjs").status(200).json({message:"appointment created"})
})
app.get("/student",(req,res)=>{
    res.json({
        id:1,
        name:"Rahul",
        course:"MERN stack"
    })
})

// data post garnu xa(POST)

app.post("/create",(req,res)=>{
    res.send("post create vayo")
})
/// PUT
app.put("/appointments/:ID",(req,res)=>{
    res.send("appointment update vayo")
})
// delete
app.delete("/appointments/:ID",(req,res)=>{
    res.send("appointments delete bhayo")
})

app.get("/dcotros/:id",(req,res)=>{   // single get garnu xa vane yo roue url use garxan
    res.send(req.params.id)
})
// multiple parametres (/student/id /rahul)

app.get("/appointments/:id/:name",(req,res)=>{
    res.json(req.params)
})
// query parameters uses in pagination
app.get("/d",(req,res)=>{
    res.json(req.query)
})

const PORT1=process.env.PORT || 3000;

app.listen(PORT1,()=>{
    console.log(`Server unning on port ${PORT1}`)

})