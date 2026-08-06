//import express from "express";
const express = require("express");
const path=require("path");
const app=express();
const PORT=3000;
app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"public","index.html"))
});
//res.send("welcome to mern stack")
app.get("/about",(req,res)=>{
res.sendFile(path.join(__dirname,"public","about.html"))
});
app.get("/contact",(req,res)=>{
res.sendFile(path.join(__dirname,"public","contact.html"))
});

app.listen(PORT,()=>{
    console.log("server is running in port 3000.");
});
