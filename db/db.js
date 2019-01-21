const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/House';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false //to get rid of Decprecation warning
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${connectionString}`);
})

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose ERROR ${err}`);
})

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose has DISCONNECTED from ${connectionString}`);
})