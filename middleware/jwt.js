let jwt = require('jsonwebtoken');
const KEYS = require('../configs/keys');

module.exports = {
  newSecretKey: () => {
    let secretKey = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: 'foobar'
    }, 'secret');
    return secretKey;
  },
  verifySecretKey: async (secretKey) => {
    let verificationStatus = await jwt.verify(secretKey, 'secret', (err, validity) => {
      if (err == null) {
        // token is valid
        console.log({validity});
        return true;
      } else {
        console.log({err});
        return false;
      }
    });
    return verificationStatus;
  }
};
