const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api';

mongoose.connect(connectionURL + '/' + databaseName, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})


const me = new User({
    name: 'Jeff',
    age: NaN
});

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error', error);
})