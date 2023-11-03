const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const items = require("../fakeDb");




router.get("/", function(req, res, next) {
    res.json({items});
})

router.post("/", function(req, res, next) {
    console.log(req.query);
    const newItem = { "name": req.query.name, "price": req.query.price };
    console.log(newItem);
    items.push(newItem);
    res.status(201).json({ added: newItem });
})

router.get('/:name', (req, res, next) => {
    const foundItem = items.find(item => item.name === req.params.name);
    if (foundItem === undefined){
        throw new ExpressError("Item not found", 404);
    }
    res.json ({ item: foundItem})
})

router.patch('/:name', (req,res,next) => {
    const foundItem = items.find(item => item.name === req.params.name);
    if (foundItem === undefined){
        throw new ExpressError("Item not found", 404);
    }
    foundItem.name = req.body.name;
    foundItem.price = req.body.price;
    res.json({ updated: foundItem })
})

router.delete('/name', (req,red,next) => {
    const foundItem = items.find(item => item.name === req.params.name);
    if (foundItem === undefined){
        throw new ExpressError("Item not found", 404);
    }
    item.splice(foundItem, 1);
    res.json({ message: "Deleted" })
})

module.exports = router