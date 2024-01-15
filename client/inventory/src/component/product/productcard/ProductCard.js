import { useMainValue } from "../../../maincontext";
import style from "./ProductCard.module.css"
import { useNavigate } from "react-router-dom";

function ProductCard({ name,id,price,desc,supplier,mfg,exp,quantity}){

    const navigate = useNavigate();

  const{deleteProduct,updateInit} = useMainValue();
  
    const update = (id) => {

        updateInit(id).then(()=>{
            
             navigate('/')
        })
    }


    return(

      <div 
      className={style.prodcardcontainer}
      id={id} >
           <h1 className={style.prodheading}>{name}</h1>
           <ul className={style.prodlist}>
              <li>Price:- Rs {price}</li>
              <li>Description:- {desc}</li>
              <li>Supplier:- {supplier}</li>
              <li>Mfg date:- {mfg}</li>
              <li>Exp date:- {exp}</li>
              <li>Quantity:- {quantity}</li>           
           </ul>
           <div className={style.prodbtn}>
               <button onClick={()=>deleteProduct(id)}>Delete</button>
               <button onClick={()=>update(id)}>Update</button>
           </div>
      </div>
    );



}

export default ProductCard;