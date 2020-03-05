const express = require('express');
const router = express.Router();


/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *        - Common & others
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 *       400:
 *         description: login failed
 */

router.get('', async (req, res) => {
  res.send("Welcome to Node boilerplate 2020.")


});

module.exports = router;
