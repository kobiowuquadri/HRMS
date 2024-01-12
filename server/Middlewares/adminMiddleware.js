const jwt = require('jsonwebtoken')

const authorizedAdmin = (req, res, next) => {
  try {
    const adminToken = req.headers['authorization'].split(' ')[1]
    jwt.verify(adminToken, process.env.SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err)
      }
      req.body.adminId = decodedToken.id
      next()
    })
  } catch (err) {
    console.log(err.message)
    return res.status(401).send({ auth: false, message: 'Admin UnAuthorized.' })
  }
}


module.exports = authorizedAdmin