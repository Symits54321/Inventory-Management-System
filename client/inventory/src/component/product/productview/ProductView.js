
import { useMainValue } from "../../../maincontext";
import ProductCard from "../productcard/ProductCard";
import style from "./ProductView.module.css" 

const divImag = {
    backgroundImage:`url("images/istockphoto-1484852942-2048x2048.jpg")`
  }


function ProductView(){


    const {prodData} = useMainValue();
    


    return(

       <main className={style.prodcontainer}
       style={divImag}>
            {prodData.map((prod) =>(
                <ProductCard
                key={prod._id}
                  id={prod._id}
                  name={prod.name}
                  desc={prod.desc}
                  price={prod.price}
                  quantity={prod.quantity}
                  supplier={prod.supplier}
                  exp={prod.exp}
                  mfg={prod.mfg}                  
                />
            ))} 
       </main>
    );



}

export default ProductView ;