const express = require("express");
const router = express.Router();

// modules
let auth = require("./Authenthication");

// use
router.use("/auth", auth);

/**
 * @swagger
 * /customer:
 *  get:
 *    tags:
 *      - Customer
 *    description: Root to customer.
 *    produces:
 *       - application/json
 *    responses:
 *      200:
 *        description: login
 *      400:
 *       description: login failed
 */

router.get("/", (req, res) => {
  res.json("Customer home");
});


module.exports = router;
