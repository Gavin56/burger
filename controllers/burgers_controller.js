const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

//Two gets - one for the html and one for the burger data
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
        res.json({ burgers: data });
    });
});

//Post will handle creating new burgers
router.post("/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        //figure out what goes here...
        // Send back the ID of the new quote
        //res.json
    });
});

//Put will handle changing burgers to "devoured"
router.put("/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    //ask about this block and what it does:
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.json({ id: req.params.id });
        }
    });
});

router.delete("/burgers/:id", function(req,res) {
    let condition = "id = " + req.params.id;

    //why is there no need to pass the "table" into this function here? How does passing work.
    burger.deleteOne(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;