const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager';

const id = new ObjectID()
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName);

    // const cursorArray = db.collection('tasks').findOne({_id: new ObjectID("5dab5c0ee4b01a0c10b40ffe")}, (error, users) => {
    //     console.log(users);
    // });

    
    // const count = db.collection('tasks').find({completed: false}).toArray((error, users) => {
    //     console.log(users);
    // });

    // db.collection('tasks').updateMany({completed:false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => { 
    //    console.log(error);
    // });

    // db.collection('users').deleteMany({
    //     age: 35
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection('tasks').deleteOne({
        description: 'Task number two'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

})