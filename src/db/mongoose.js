const mongoose = require('mongoose')
const validator = require('validator')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/task-manager');
}


