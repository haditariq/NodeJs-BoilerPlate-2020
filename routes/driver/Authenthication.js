const express = require('express');
const router = express.Router();

// helpers
let jwt = require('../../middleware/jwt');

/**
 * @swagger
 * /driver/auth/register:
 *  get:
 *    tags:
 *      - Driver
 *    description: Root to Driver.
 *    produces:
 *     - application/json
 *    responses:
 *      200:
 *        description: login
 *      400:
 *       description: login failed
 */
router.get('/register', async (req,res) => {
    let secretKey = jwt.newSecretKey();
    let validate = await jwt.verifySecretKey(secretKey);
    if (validate) {
        res.send('Secret key valid.');
    } else {
        res.send('Secret key expired.');
    }
});


module.exports = router;
