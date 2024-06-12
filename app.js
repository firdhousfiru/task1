const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {pharmacymodel}=require("./models/pharmacy")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://firdhouskh:kunjumol@cluster0.h3qcl.mongodb.net/pharmacydb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
    let input=req.body
    console.log(input)
    let pharmacy = new pharmacymodel(input)
    console.log(pharmacy)
    pharmacy.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    pharmacymodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    ) 
})

app.listen(9000,()=>{
    console.log("server started")
})