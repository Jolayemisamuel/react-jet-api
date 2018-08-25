var ItemType = require('../models/ItemsType');

var mongoose = require('mongoose');

const connectURI=require('../config/dburi');


const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
  };
  
  mongoose.connect(connectURI, options).then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );



var types = [
    new ItemType({        
        name: 'Electronics'        
    }),
    new ItemType({        
        name: 'Software'        
    }),
    new ItemType({        
        name: 'House Hold'        
    })
];

var done = 0;
for (var i = 0; i < types.length; i++) {
    types[i].save(function (err, result) {
        done++;
        if (done === types.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
