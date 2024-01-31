const jwt = require('jsonwebtoken')

const authorizedAdmin = (req, res, next) => {
  try {
    const adminToken = req.headers['authorization'].split(' ')[1]
    console.log(adminToken)
    jwt.verify(adminToken, process.env.SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err)
        return res.status(400).json({ auth: false, message: 'UnAuthorized.' })
      }
      console.log(req.body)
      req.body.adminId = decodedToken.id
      next()
    })
  } catch (err) {
    console.log(err.message)
    return res.status(400).json({ auth: false, message: 'Admin UnAuthorized.' })
  }
}


module.exports = authorizedAdmin