const bcrypt = require('bcrypt')
const Users = require('../src/controller/users')

exports.login = (req, res, next) => {
  console.log('<Entry Login > req.body.emailId = ', req.body.emailId, ' req.body.password = ', req.body.password)
  if (req.body.emailId && req.body.password) {
    Users.findUser(req.body.emailId, (user, err) => {
      console.log('<Login> err = ', err, '   user = ', user)
      if (err) return res.status(500).send({msg: err.msg});
      (user === 'undefined' || user === null)
        ? res.status(401).send(req.body.emailId + ' doesn\'t exist')
        : validateUser(req, res, user)
    })
  }
}

const validateUser = (req, res, user) => {
  console.log('<Login.js validateUser>, req.body.password = ', req.body.password, ' user.password = ', user.password)
  bcrypt.compare(req.body.password, user.password, (err, same) => {
    console.log('<<Login.js validateUser> After compare err = ', err, '  same = ', same)
    if (err) return res.send({msg: 'Error in unHashing', err})
    if (same) {
      console.log('user._id = ', user._id.getTimestamp())
      res.status(200).send({msg: 'User validated', user: user})
    } else res.status(401).send({msg: 'Please provide a valid pwd !!!'})
  })
}

exports.register = (req, res) => {
  console.log('<Entry register > req.body.emailId = ', req.body.emailId, ' req.body.password = ', req.body.password, ' name = ', req.body.name)
  Users.findUser(req.body.emailId, (user, err) => {
    console.log('<Login.js register> user = ', user, ' err = ', err)
    if (err) return res.status(500).send({msg: 'Error in unHashing\n' + err.msg})
    if (user) res.status(200).send({msg: 'User with ' + req.body.emailId + ' allready exist, You can login'})
    else {
      hashPwd(req, res)
    }
  })
}

const hashPwd = (req, res) => {
  console.log('<Entry hashPwd>')
  const pass = req.body.password
  bcrypt.genSalt(12, (err, salt) => {
    if (err) return res.status(500).send({msg: 'Error in salt generation'})
    bcrypt.hash(pass, salt, (err, hash) => {
      if (err) return res.status(500).send({msg: 'Error in hash generation'})
      const password = hash
      Users.createUser(req.body, password, salt, (result) => {
        console.log('<login.js hashPwd> result = ', result)
        res.status(200).send({msg: 'User is now registered'})
      })
    })
  })
}
