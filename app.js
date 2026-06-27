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

// Users Route 
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

    console.log(req.body);
    
    const user = req.body;

    res.json({
        message: "User created successfully",
        user: user
    });

});


app.get("/users/:id", (req, res) => {

    const id = req.params.id;

    res.json({
        message: "User retrieved successfully",
        userId: id
    });

});

// Users and Orders Route 

app.get("/users/:userId/orders/:orderId", (req, res) => {

    res.json({
        user: req.params.userId,
        order: req.params.orderId
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
// Update existing shipment
app.put("/shipments/:id", (req, res) => {

    res.json({
        message: "Shipment updated successfully",
        shipmentId: req.params.id,
        updatedData: req.body
    });

});

// Drivers Routes

//Driver List
app.get("/drivers", (req, res) => {

    res.json([
        {
            id: 1,
            name: "James",
            vehicle: "Toyota Hiace",
            status: "Available"
        },
        {
            id: 2,
            name: "Sarah",
            vehicle: "Mercedes Sprinter",
            status: "On Delivery"
        }
    ]);

});
// Find Driver
app.get("/drivers/:id", (req, res) => {

    res.json({
        message: "Driver retrieved successfully",
        driverId: req.params.id
    });

});
// Add Driver
app.post("/drivers", (req, res) => {

    const driver = req.body;

    res.json({
        message: "Driver added successfully",
        driver
    });

});
// Delete a driver
app.delete("/drivers/:id", (req, res) => {

    res.json({
        message: "Driver deleted successfully",
        driverId: req.params.id
    });

});
//*Query Parameters* Search

app.get("/search", (req, res) => {

    res.json({
        searchParameters: req.query
    });

});


app.listen(3000, () => {
    console.log("Server running on port 3000");
    
});


