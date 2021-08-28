const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// var objectId = new ObjectID();
// console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect');
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteMany({
        idComp: true
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})

//object id
//globally unique id - 12 bytes

//4-byte value representing seconds since the unix epoch
//5-byte random value
//3-byte counter starting from random number

//id.getTimestamp() - gives time stamp

