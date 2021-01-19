const burger = require("../models/burger.js");
const express = require("express");

module.exports = (router) => {
  // Render all burgers on the homepage
  router.get("/", (req, res) => {
    burger.getBurgers((data) => {
      let burgerObj = {
        burgers: data,
      };

      res.render("index", burgerObj);
    });
  });
  // Add a new burger to the database
  router.post("/api/burger", (req, res) => {
    burger.newBurger(
      ["burger_name", "devoured"],
      [req.body.name, false],
      (result) => {
        res.json({ id: result.id });
      }
    );
  });
  // Update a burger if it is devoured
  router.put("/api/devoured", (req, res) => {
    const id = req.body.id;
    burger.isDevoured(id);
  });
};
