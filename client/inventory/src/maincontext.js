

import { useState, createContext,  useContext, useEffect } from "react";





export const mainContext = createContext();



export default function MainContextProvider({children}){

    const[message,setMessage]= useState('Welcome to Inventory Management System')
  

   const[prodData,setprodData] = useState([]);

   const[updateState,setUpdateState] = useState(false);
   const[idUpdate,setIdUpdate] = useState("");
   
   const[name,setName] = useState("");
   const[price,setPrice] = useState();
   const[desc,setDesc] = useState("");
   const[supplier,setSupplier] = useState("");
   const[mfg,setMfg] = useState("");
   const[exp,setExp] = useState("");
   const[quantity,setQuantity] = useState();


 // Functions

   //add
   const addProduct = async() => {

    try {

        

        const response = await fetch(`http://localhost:8100/products/create/?name=${name}&price=${price}&desc=${desc}&supplier=${supplier}&mfg=${mfg}&exp=${exp}&quantity=${quantity}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',           
          }     
        });


        if (response.ok) {
            // Status is in the range 200-299
            const result = await response.json();
            console.log(result.message);
            const product = await result.data;
            console.log(product);
            setMessage('Product Added succesfully, Go to products page ');
            getProduct();

          } else {
            // Handle errors based on the status
            console.error(`Error: ${response.status} - ${response.statusText}`);
            setMessage('Error in adding products');

          }

          

    
       
        // adding product in state;
       
       
      } catch (error) {
        console.error('Error adding product data:', error);
      } finally {
        // Any cleanup or additional logic
      }

   }


   //get
   const getProduct = async() => {

    try {

        const response = await fetch('http://localhost:8100/products/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',           
          },       
        });
    
        const result = await response.json();
        const products = await result.data.products;
        console.log("got product data");
        console.log(products);
        // adding product in state;
        setprodData(products);
       // setMessage('Welcome to IMS and you are connected to server ');

       
      } catch (error) {
        console.error('Error getting product data:', error);
        setMessage('Error in fetching products');

      } finally {
        // Any cleanup or additional logic
      }
   }



  // Update initialising (redirecting to update page )
   const updateInit = async(id) => {
       
    const filteredData = prodData.filter((x) => x._id === id);
        console.log("to update");
        console.log(id);
        console.log (filteredData);

        if (filteredData.length > 0) {
            const toUpdate = filteredData[0]; // Assuming there's only one matching item
            setName(toUpdate.name);
            setPrice(toUpdate.price);
            setDesc(toUpdate.desc);
            setQuantity(toUpdate.quantity);
            setExp(toUpdate.exp);
            setMfg(toUpdate.mfg);
            setSupplier(toUpdate.supplier);
            setUpdateState(true);
          } 

          setMessage('Fill the Update form ');
      setUpdateState(true);
      setIdUpdate(id);
     



   }

   // Update (in update form in homepage)
   const updateProduct = async(id) => {
 
    
    try {

        const response = await fetch(`http://localhost:8100/products/update/${id}/?name=${name}&price=${price}&desc=${desc}&supplier=${supplier}&mfg=${mfg}&exp=${exp}&quantity=${quantity}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',           
          }     
        });


        if (response.ok) {
            // Status is in the range 200-299
            const result = await response.json();
            console.log(result.message);
            const product = await result.data;
            console.log(product);

            getProduct();

            setMessage('Product Updated Succesfully');

          } else {
            // Handle errors based on the status
            console.error(`Error: ${response.status} - ${response.statusText}`);

          }



    
       
        // adding product in state;
       
       
      } catch (error) {
        console.error('Error updating product data:', error);
        setMessage('Error updating product data');

      } finally {
        // Any cleanup or additional logic
        
        setName("");
        setPrice(0);
        setDesc("");
        setQuantity(0);
        setExp("");
        setMfg("");
        setSupplier("");

        setUpdateState(false);
        setIdUpdate("");
       
      }


   }


   //delete
   const deleteProduct = async(id) => {
    try {

        const response = await fetch(`http://localhost:8100/products/delete/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',           
          },       
        });

        if (response.ok) {

        const result = await response.json();    
          console.log(result.message);
          setMessage('Product Deleted Succesfully');

          getProduct();
        }
        
          
        
       
      } catch (error) {
        console.error('Error deleting product data:', error);
        setMessage('Error in deleting the product');

      } finally {
        // Any cleanup or additional logic
      }
   }
  

   // --------- execting---

   useEffect(()=>{
      getProduct();
   },[updateState])
   

   return(
    <mainContext.Provider value={
        {prodData,updateState,setUpdateState,idUpdate,
            name,price,desc,supplier,mfg,exp,quantity,
            setName,setPrice,setDesc,setSupplier,setMfg,setExp,setQuantity,
        addProduct,getProduct,updateProduct,updateInit,deleteProduct,message,setMessage}
        }>
      {children}
    </mainContext.Provider>
);


}

export function useMainValue() {
    let value = useContext(mainContext);  
      return value;
}