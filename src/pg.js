require('./db/mongoose')
const User = require('./models/user')

User.findByIdAndUpdate('6129390fc878590c7145d5cd', { age: 10 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 10 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
