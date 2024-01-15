Hi welcome to Inventory Management System
This file contains two folder server and client. Server folder contains Node.js server files for backend communication through API 
while Client/inventory contains a react app which will be using this API for CRUD operation. So for correct operation you need to open two terminal one is server and anothe client/inventory



DOCS :

(a)Server :- 

         // to start the server
           .........\server> npm start

        // then you will get succesfull setup message as :-

         Inventory Management System is Listening to port:8100
         Succesfully connected to the database


         1) to create
        // http://localhost:8100/products/create/?name=<name>&price=<price>&desc=<description>}&supplier=<supplier info>&mfg=<mfg date>&exp=<exp date>&quantity=<quantity>

         2) to get all products         
        // http://localhost:8100/products/get

         3) to update        
        // http://localhost:8100/products/update/<_id>/?quantity=78&price=40
        
         4) to delete
        // http://localhost:8100/products/delete/<_id>



(b) client :-

        .............\client\inventory> npm start

        React app will get open soon with link http://localhost:3000    

        1) Nav section contains two buttons one is the logo itself for Home and another is product button for Product page

        2) Main section in homepage is the Inventory Product form to create products

        3) on clicking Product button , a list of products appear , each list has delete and Update button

      Note  :- server must be on for  succesfull operation

      
              

       
