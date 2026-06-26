// const express = require("express");

// const app = express();

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// // Routes - they tell the server how to respond
const express = require("express");

const app = express();

app.use(express.json()); //without it "req.body" is undefined( While adding a POST Route ). It is JSON middleware

// // Routes 
// app.get - means , when sombody visits /, execute this code
app.get("/", (req, res) => {
    res.send("Hello Rhema");
});

app.get("/users", (req, res) => {
    // res.send("Users Route");
    res.json([
        {
            id: 1,
            name: "Rhema"
        },
        {
            id:2,
            name: "John"
        }
    ]);
});


app.post("/users", (req, res) => {

    const user = req.body;

    res.json({
        message: "User created successfully",
        user: user
    });

});

app.get("/about", (req, res) => {
    res.send("Learning Express.js");
});
// Logistics Route
app.get("/shipments", (req, res) => {
    res.json([
        {
            id: 1,
            customer: "Grace",
            status: "Pending"
        },
        {
            id: 2,
            customer: "Michael",
            status: "Delivered"
        }
    ]);
});

app.post("/users", (req, res) => {
    const user = req.body;

    res.json({
        message: "User created successfully",
        user: user
    });
});




app.listen(3000, () => {
    console.log("Server running on port 3000");
});


