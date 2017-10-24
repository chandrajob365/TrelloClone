const User = require('../models/Schema').User
console.log('---- User ---- ', User)
exports.findUser = (emailId, cb) => {
  User.findOne({'emailId': emailId}, (err, user) => {
    console.log('<users.js findUser> err = ', err, '  user = ', user)
    if (err) return cb(null, {msg: err})
    cb(user, null)
  })
}

exports.createUser = (user, pwd, salt, cb) => {
  console.log('<users.js, createUser> user = ', user, ' pwd = ', pwd, ' salt = ', salt)
  User.create({
    name: user.name,
    emailId: user.emailId,
    password: pwd,
    salt: salt
  }, (err, response) => {
    console.log('<users.js, createUser> err = ', err, ' response = ', response)
    if (err) return cb(null, {msg: 'Error in user creation', err})
    cb(response, null)
  })
}
