MERN Project

Hi welcome to Inventory Management System
This file contains two folder server and client. Server folder contains Node.js server files whict acts as backend and can be communicated through API 
while Client/inventory folder contains a react app which acts as frontend and sends API request  for CRUD operation and displays beautifully. So for correct operation you need to open two terminal one is server and anothe client/inventory and run corresponding funstions to start them. The instructions  are given below



DOCS :

(a)Server :- 

         // First Install
         .......\server> npm install

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



(b) Client :-

         // First Install
         .......\client\inventory> npm install
         
         // Start React App
        .............\client\inventory> npm start

        React app will get open soon with link http://localhost:3000    

        1) Nav section contains two buttons one is the logo itself for Home and another is product button to open Product page

        2) Below Nav there is Main section which contains Inventory Product form to create products

        3) After creating the products, click on the Product button in nav , product page will open and a list of products appear , each list has delete and Update button.
           Delete button deletes the product and update button redirects to update page to update the product details.

      Note  :- server must be on for  succesfull operation

      
              

       
