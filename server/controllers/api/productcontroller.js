const productModel= require ('../../modals/product_model');



// Functions

// getAll -> to get all products -------------------------------------------------------------------
module.exports.getAll = async function (req, res) {
  
    try {                                          // using try and catch
      
      let products = await productModel.find({});  // getting from model
  
  
         if(products.length>0){                             // return JSON
    
              return res.status(200).json({
                message: 'List of products',
                data: {
                  products: products
                }
               
              });
  
          }else{
  
            return res.status(200).json({                        // not found
              message: 'No products / please create a product',
              
            });
  
        }



    }catch(error) {                                          // error message
        console.error('Error in getting product:', error);
        res.status(500).send('Error viewing ');
   }    
   
}









// search function  ---------------------------------------------------------------------------------
module.exports.search = async function (req, res) {


  
  try {                                          

    let products ;
    
    //search by name
    if(req.query.name ){

       let name = req.query.name    
          products = await productModel.find({name:name});  // getting from model
    } 


    // search by id
   else if(req.query.id){

      let id = req.query.id    
         products = await productModel.find({_id:id});  // getting from model 
   } 


   // search by namestart  (i.e. namestaring with)
  else if(req.query.namestart){

    let namestart = req.query.namestart ;  
    let regex = new RegExp(`^${namestart}`, 'i');  //reqular expression maker, ^ to find namestarting with, i to not follow the remaining word
    console.log(regex);
       products = await productModel.find({name:regex});  // getting from model
    //console.log(products);
      } 
   else{

    return res.status(200).json({                        // not found
      message: 'Invalid query',
   })
  }
  

        


       if(products.length>0){                             // return JSON
  
            return res.status(200).json({
              message: 'Your searched products',
              data: {
                products: products
              }
             
            });

        }else{

          return res.status(200).json({                        // not found
            message: 'No such product found',
            
          });

      }



  }catch(error) {                                          // error message
      console.error('Error in getting product:', error);
      res.status(500).send('Error viewing ');
 }    
 
}








// create function -> to create products ------------------------------------------------------------
// to create products
module.exports.create = async function (req, res) {
 
 

 try {

 console.log("create req is " + req.query.name);
       // creating product
         let product = await productModel.create({                   

             name:req.query.name,
             price:req.query.price,
             desc:req.query.desc,                                 // creating product
             supplier:req.query.supplier,
             mfg:req.query.mfg,
             exp:req.query.exp,
             quantity:req.query.quantity,

             

            });
              
      
               if(product){

                     return res.status(200).json({
                               message: "product created",             // successfully created product
                               data:product         
                         });

                 }else{
                   
                   return res.status(200).json({
                           
                     message: "Failed to create the product",

                   });
               }


     } catch (error) {                                             // unsucessfull to create product

         console.error("creating error"+error);

         return res.status(500).json({
               message: "Internal Server Error while creating"+req.body,
         });
     }

};








// ------------ to update products ----------------------------------------------------------------------------------------------------------------------------

module.exports.update=async function(req,res){

  console.log("product by Api update "+req);

  try {

          const productId = req.params.id;  // getiing the :id 
          const query = req.query;   // getting the product datas in query form

          const updateProduct = await productModel.updateOne({ _id: productId }, { $set: query });

          if(updateProduct){         // if product updated

            let updatedproduct= await productModel.findById(productId);

                 

                      res.status(200).json({
                        message: 'product update successfull ' ,
                        data:updatedproduct,
                       
                      });


            }else{
              
              res.status(500).json({
                message: `product not found matching id= ${productId}`,
             
              });
            }

  }catch(error) {

      console.error("product update error"+error);
      res.status(500).json({ 
        message: 'Internal Server Error while updating/ product not found',
        error:error
       });
    }
}








// ------------ to delete products ----------------------------------------------------------------------------------------------------------------------------


module.exports.delete=async function(req,res){

  console.log("Deleted id "+req.params.id);

  try {

          const productId = req.params.id; // getting the :id 

          const deletedproduct = await productModel.findByIdAndDelete(productId);

          if(deletedproduct){         // if deleted

                res.status(200).json({
                  message: 'product deleted ' ,
                  data:deletedproduct
                  });

            }else{
              
              res.status(200).json({
                message: 'product not found ' 
              });
            }

  }catch(error) {

      console.error("product delete error"+error);
      res.status(500).json({ 
        message: 'Internal Server Error while deleting / product not found',
        error:error
       });
    }
}