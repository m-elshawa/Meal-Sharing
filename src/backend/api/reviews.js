const express = require("express");
const router = express.Router();
const knex = require("../database");

// api/reviews/ GET
router.get("/", async (request, response) => {
    try {
      // knex syntax for selecting things. Look up the documentation for knex for further info
      const titles = await knex("reviews").select("*");
      response.json(titles);
    } catch (error) {
      throw error;
    }
  });


//   api/reviews/ POST ===>> I don't understand this code
router.post("/", async (request, response) => {
    try {
      await knex("reviews").insert(request.body)
      response.json("New Review");
    } catch (error) {
      throw error;
    }
  })


  // api/reviews/{id} GET
router.get("/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {   
      const reviewId = await knex("reviews").select("*").where('reviews.id', id)
      res.json(reviewId);
    } catch (error) {
      throw error;
    }
  });

//   api/reservations/{id} PUT
router.put("/:id", async (req,res) => {
    try{
      const updatedreview = await knex("reviews").where({id: 3}).update({description: "Loved the food, Great experience"});
      res.json(updatedreview);
  
    } catch (error) {
      throw error;
    }
  })


//   api/reviews/{id} DELETE
router.delete("/:id", async (req,res) => {
    try{
      const deletedReview = await knex("reviews").where({id: 4}).del();
      res.json(deletedReview);
  
    } catch (error) {
      throw error;
    }
  })
  


module.exports = router;