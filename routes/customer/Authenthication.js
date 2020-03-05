const express = require('express');
const router = express.Router();


/**
 * @swagger
 * /customer/auth/register:
 *  post:
 *    tags:
 *      - Customer
 *    description: register customer
 *    produces:
 *       - application/json
 *    responses:
 *      200:
 *        description: login
 *      400:
 *       description: login failed
 */

router.post('/register', (req,res) => {
    res.send("Customer register")
});


module.exports = router;
