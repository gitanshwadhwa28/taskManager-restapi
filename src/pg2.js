require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('./models/user')
const { countDocuments } = require('./models/user')





const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return { user, count }
}

updateAgeandCount('612d42b09730ee22c684846c', 10).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})



// Task.findByIdAndDelete('61294fd70ed05da066005ede').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ isDone: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Task.insertMany([
//     { 'description': 'code' }, { 'description': 'ahhh' },
//     { 'description': 'code2' }, { 'description': 'ah2' }
// ]).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })


// async returns a promise which is fullfilled by output of the function