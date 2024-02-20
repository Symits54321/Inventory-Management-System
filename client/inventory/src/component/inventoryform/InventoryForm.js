import { useMainValue } from "../../maincontext";
import style from "./InventoryForm.module.css";

import { useNavigate } from "react-router-dom";


function InventoryForm(){

    const navigate = useNavigate();

const { name,price,desc,supplier,mfg,exp,quantity,idUpdate,
    setName,setPrice,setDesc,setSupplier,setMfg,setExp,setQuantity,
    addProduct,getProduct,updateProduct,deleteProduct,
    updateState,message,setMessage
     } = useMainValue();


     const handleSubmit = async(e) => {

        e.preventDefault();

        if(updateState){
            updateProduct(idUpdate)
            .then(()=>{
                navigate('/products')
            })
        }else{
             addProduct();
        }
       
     }

     const divImag = {
        backgroundImage:`url("images/istockphoto-1484852942-2048x2048.jpg")`
      }


    return(

        <main className={style.mainbox} style={divImag}> 
        <h3 className={style.heading}>Inventory Product Form</h3>
        
        <form onSubmit={handleSubmit} className={style.gridcontainer}>
          
           <label>Product Name</label>
           <input value={name} 
                placeholder='' required
                onChange={(e)=>setName(e.target.value)}/>

           <label>Price</label>
           <input value={price} 
                placeholder='number only' type="number" required
                onChange={(e)=>setPrice(e.target.value)}/>

          <label>Quantity</label>
           <input value={quantity} 
                placeholder='number only' type="number" required
                onChange={(e)=>setQuantity(e.target.value)}/>     

           <label>Description</label>
           <input value={desc} 
                placeholder='' required
                onChange={(e)=>setDesc(e.target.value)}/> 

            <label>Supplier name</label>
           <input value={supplier} 
                placeholder='' required
                onChange={(e)=>setSupplier(e.target.value)}/> 


            <label>Manufacture date</label>
           <input value={mfg} 
                placeholder='' required
                onChange={(e)=>setMfg(e.target.value)}/>

            <label>Expiry date</label>
           <input value={exp} 
                placeholder='' required
                onChange={(e)=>setExp(e.target.value)}/>                           

                     
        
     <button type='submit' className={style.item}>
        {updateState ? "Update": "Create"}
        </button>
        
         

        </form>    
     
     
     </main>

    );

}


export default InventoryForm