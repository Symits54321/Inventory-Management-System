// requiring mongoose from library
const mongoose = require('mongoose');

// product schema
const productSchema = new mongoose.Schema( {

   name:{

        type:String,
        required:true
   },

   price:{

        type:Number,
        required:true

   },

   desc:{

        type:String,
        required:true

   },

   supplier:{

        type:String,
        required:true

   },

   mfg:{

        type:String,
        required:true

   },
   
   exp:{

        type:String,
        required:true

    },

   quantity:{

        type:Number,
        required:true

   }



 },{
    timestamps : true
 }
);

// making model mongoose.model('modelname/collection',schema);
const productmodel = mongoose.model('products', productSchema);

module.exports=productmodel;
