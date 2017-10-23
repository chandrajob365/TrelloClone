const bcrypt = require('bcrypt')
const Users = require('../src/controller/users')

exports.login = (req, res, next) => {
  if (req.body.emailId && req.body.password) {
    Users.findUser(req.body.emailId, (user, err) => {
      if (err) return res.status(500).send({msg: err.msg})
      user
        ? validateUser(req, res, user)
        : res.status(401).send({msg: req.body.emailId + ' doesn\'t exist'})
    })
  }
}

const validateUser = (req, res, user) => {
  bcrypt.compare(req.body.password, user.password, (err, same) => {
    if (err) return res.send({msg: 'Error in unHashing', err})
    if (same) {
      console.log('user._id = ', user._id.getTimestamp())
      res.status(200).send({msg: 'User validated', user: user})
    } else res.status(401).send({msg: 'Please provide a valid pwd !!!'})
  })
}

exports.register = (req, res) => {
  Users.findUser(req.body.emailId, (user, err) => {
    if (err) return res.status(500).send({msg: 'Error in unHashing\n' + err.msg})
    if (user) res.status(200).send({msg: 'User with ' + req.body.emailId + ' allready exist, You can login'})
    else {
      hashPwd(req, res)
    }
  })
}

const hashPwd = (req, res) => {
  const pass = req.body.password
  bcrypt.genSalt(12, (err, salt) => {
    if (err) return res.status(500).send({msg: 'Error in salt generation'})
    bcrypt.hash(pass, salt, (err, hash) => {
      if (err) return res.status(500).send({msg: 'Error in hash generation'})
      const password = hash
      Users.createUser(req.body, password, salt, (result) => {
        res.status(200).send({msg: 'User is now registered'})
      })
    })
  })
}
