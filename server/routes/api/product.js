// Requiring the product controller
const productcontroller = require('../../controllers/api/productcontroller');

const express = require('express');
const router = express.Router();


 router.get('/get',productcontroller.getAll); // to get all

 router.post('/create',productcontroller.create); // to create (by sending query of its corresponding datas)

 router.post('/search',productcontroller.search); // to search (by query sending name or id)

 router.post('/update/:id',productcontroller.update); // to update

 router.post('/delete/:id',productcontroller.delete); // to delete



module.exports=router;