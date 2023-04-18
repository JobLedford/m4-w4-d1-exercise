const mongoose = require('mongoose');

mongoose.set("strictQuery", true);
//mongoose.connect('mongodb://localhost:27017/test'); //OR
mongoose.connect('mongodb://127.0.0.1:27017/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  const fruitschema = new mongoose.Schema({
    name: String
  });

  const Fruit = mongoose.model('Fruit', fruitschema);
  
  //create data
  const myFruit = new Fruit({ name:'apple' });
  console.log(myFruit.name);
});
