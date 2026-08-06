const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend running");
});

app.get("/Spidy_Day", (req, res) => {
    const Spiderman = [
        { id: 1, name: "toby", movie: "spiderman" },
        { id: 2, name: "andrew", movie: "amazing spiderman" },
        { id: 3, name: "tom", movie: "marvel spiderman" },
    ];

    res.json(Spiderman);
});
app.post(
    "/Spidy_Day",(req,res)=>{
        console.log(req.body);
        res.json(
            {
                message:"Spidy Added",
                Spiderman:req.body
            }
        );
    }
);
app.listen(5000, () => {
    console.log("Server is connected.");
});