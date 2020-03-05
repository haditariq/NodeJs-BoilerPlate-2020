const express = require('express');
const router = express.Router();


/**
 * @swagger
 * /driver:
 *  get:
 *    tags:
 *      - Driver
 *    description: Root to Driver.
 *    produces:
 *       - application/json
 *    responses:
 *      200:
 *        description: login
 *      400:
 *       description: login failed
 */
router.get("/", (req, res) => {
  res.json("Driver index");
});



let auth = require('./Authenthication');
router.use('/auth', auth);


module.exports = router;
