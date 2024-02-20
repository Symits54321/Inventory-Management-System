import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContextProvider from "./maincontext";

import { useMainValue } from "./maincontext";

import Navbar from "./component/navbar/Navbar";
import InventoryForm from "./component/inventoryform/InventoryForm";
import ProductView from "./component/product/productview/ProductView";


function App() {

  const browserRouter = createBrowserRouter([

    {
      path: "/",
      element: <><Navbar/></>, 
      children: [

        { path: "", element: <><InventoryForm /></> ,},  
        { path: "products", element: <ProductView />, },
      
       
         
        ],
      },     
    
  ]);

  return (
    <>
     <MainContextProvider>
       <RouterProvider router={browserRouter} />
     </MainContextProvider>
     
    </>
  );
}

export default App;
