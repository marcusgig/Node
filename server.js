import express from 'express';
import cors from 'cors';
import { PrismaClient } from './prisma/generated/client/index.js';
const prisma = new PrismaClient();


const app = express();
app.use(express.json())
app.use(cors())


app.get("/usuarios/:id", async (req, res) => {
    const users = await prisma.user.findmany()
    res.status(200).json({users})

});

app.post("/usuarios", async (req, res) => {
 const user = await   prisma.user.create({
    data:{
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }
 });
    res.status(201).json({user})
    
});

app.listen(3000)
