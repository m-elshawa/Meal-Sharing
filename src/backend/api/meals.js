const { response, request } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

// api/meals/ GET

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meals").select("*");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

// api/meals/ POST [donno how to do it]
router.post('/', async (req, res) => {
  const postData = req.body;

  try {
    const ids = await knex('meals').insert(postData);
    res.status(201).json(ids);
  } catch (err) {
    res.status(500).json({message: "Error creating new post", error: err})
  }

});


// api/meals/{id} GET
router.get("/:id", async (req, res) => {
  const {id} = req.params;
  console.log(id);
  try {   
    const mealId = await knex("meals").select("*").where('meals.id', id)
    res.json(mealId);
  } catch (error) {
    throw error;
  }
});

// api/meals/id PUT
router.put("/:id", async (req,res) => {
  try{
    const updatedMeal = await knex("meals").where({id: 25}).update({title: "Chicken Masala"});
    res.json(updatedMeal);

  } catch (error) {
    throw error;
  }
})

// api/meals/id DELETE
router.delete("/:id", async (req,res) => {
  try{
    const deletedMeal = await knex("meals").where({id: 5}).del();
    res.json(deletedMeal);

  } catch (error) {
    throw error;
  }
})

// GET api/meals query parameters
// MAX PRICE  (Results don't show, I guess coz I have the price value as strings)
router.get("/", async (req, res) => {
  const query = req.query;
  try {
    if (query.maxPrice) {
      const cheapMeals = await knex("meals").where("price", "<", Number(query.maxPrice));
      res.json(cheapMeals);
      // the following is a copied code, i do not fully understand it
    }  else if (query.title) {
      const mealsLikeTitle = await knex("meals")
      .where('title', 'like', `%${query.title}%`);
      response.json(mealsLikeTitle);

    } else if (query.createdAfter) {
      const mealsCreatedAfter = await knex("meals")
      .where('created_date', '>', query.createdAfter);
      response.json(mealsCreatedAfter);
      
    }  else if (query.limit) {
      const limitMeals = await knex("meals")
        .select()
        .limit(query.limit);
         response.json(limitMeals);
    }
  } catch (error) {
    throw error;
  }
})








module.exports = router;
