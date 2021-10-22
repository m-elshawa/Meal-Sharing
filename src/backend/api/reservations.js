const express = require("express");
const router = express.Router();
const knex = require("../database");

// api/reservations/ GET
router.get("/", async (request, response) => {
    try {
      // knex syntax for selecting things. Look up the documentation for knex for further info
      const titles = await knex("reservations").select("*");
      response.json(titles);
    } catch (error) {
      throw error;
    }
  });


//   api/reservations/ POST ===>> I don't understand this code
router.post("/", async (request, response) => {
    try {
      await knex("reservations").insert(request.body)
      response.json("Added reservation");
    } catch (error) {
      throw error;
    }
  })


  // api/reservations/{id} GET
router.get("/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {   
      const reservationId = await knex("reservations").select("*").where('reservations.id', id)
      res.json(reservationId);
    } catch (error) {
      throw error;
    }
  });

//   api/reservations/{id} PUT
router.put("/:id", async (req,res) => {
    try{
      const updatedreservation = await knex("reservations").where({id: 3}).update({contact_name: "Amin"});
      res.json(updatedreservation);
  
    } catch (error) {
      throw error;
    }
  })


//   api/reservations/{id} DELETE
router.delete("/:id", async (req,res) => {
    try{
      const deletedReservation = await knex("reservations").where({id: 7}).del();
      res.json(deletedReservation);
  
    } catch (error) {
      throw error;
    }
  })
  


module.exports = router;