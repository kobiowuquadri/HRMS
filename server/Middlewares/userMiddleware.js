const jwt = require('jsonwebtoken');

const authorizedUser = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];

    jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return res.status(401).send({ auth: false, message: 'UnAuthorized.' });
      }

      if (decodedToken) {
        req.body.userId = decodedToken.id;
        next();
      } else {
        console.log('Decoded token is undefined');
        return res.status(401).send({ auth: false, message: 'UnAuthorized.' });
      }
    });
  } catch (err) {
    console.log(err.message);
    return res.status(401).send({ auth: false, message: 'UnAuthorized.' });
  }
};

module.exports = authorizedUser;
