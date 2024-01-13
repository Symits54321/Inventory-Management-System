const productModel= require ('../../modals/product_model');



// Functions

// getAll -> to get all products
module.exports.getAll = async function (req, res) {
  
    try {                                          // using try and catch
      
      let products = await productModel.find({});  // getting from model
  
  
         if(products){                             // return JSON
    
              return res.status(200).json({
                message: 'List of products',
                data: products
              });
  
          }else{
  
            return res.status(200).json({                        // not found
              message: 'No products / please create a product',
              
            });
  
        }



    }catch(error) {                                          // error message
        console.error('Error reading CSV file:', error);
        res.status(500).send('Error viewing ');
   }    
   
}

// create -> to create products
module.exports