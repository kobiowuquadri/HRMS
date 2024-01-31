const jwt = require('jsonwebtoken')

const authorizedUser = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    console.log('Token:', token)

    jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message)
        return res.status(400).json({ auth: false, message: 'UnAuthorized.' })
      }

      if (decodedToken) {
        console.log('Decoded Token:', decodedToken)
        req.user = decodedToken.id
        console.log('User ID:', req.user)

        next()
      } else {
        console.log('Decoded token is undefined')
        return res.status(404).json({ auth: false, message: 'UnAuthorized.' })
      }
    })
  } catch (err) {
    console.log(err.message)
    return res.status(400).json({ auth: false, message: 'UnAuthorized.' })
  }
}

module.exports = authorizedUser
