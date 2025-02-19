const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    Recipe 
          .create(data[0])
          .then(data => console.log(data.title))
          .catch(console.log)

      Recipe.insertMany(data)
            .then(data => {data.forEach(data => console.log(data.title))
            dato();
            dato2()})
            .catch(err => console.log(err))

      let dato = async() => {
        try{
          const datoAct = await
          Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration:100})
          console.log("We Did It!!!")
        }
          catch(err){ console.log(err)}
      }

          
      let dato2 = async() => {
        try{
          const datoDel = await
          Recipe.deleteOne({title: "Carrot Cake"})
          console.log("Is no longer available")
        }
          catch(err){ console.log(err)}
      }


      mongoose.connection.close()

  })      
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
