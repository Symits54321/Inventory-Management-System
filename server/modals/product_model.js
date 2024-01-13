// requiring mongoose from library
const mongoose = require('mongoose');

// product schema
const productSchema = new mongoose.Schema( {

   product_name:{

        type:String,
        required:true
   },

   price:{

        type:Number,
        required:true

   },

   product_desc:{

        type:String,
        required:false

   },

   Supplier_info:{

        type:String,
        required:true

   },

   mfg_date:{

        type:Date,
        required:true

   },
   
   exp_date:{

        type:Date,
        required:true

    },

   quantity:{

        type:Number,
        required:false

   }



 },{
    timestamps : true
 }
);

// making model mongoose.model('modelname/collection',schema);
const productmodel = mongoose.model('products', productSchema);
