const express = require("express");
const Product = require('../model/productModel')



const getAllproductStatic = async (req, res) => {
    const products = await Product.find({featured: true})
    return res.status(200).json({
        message: `Success ..........`,
        nbHits: products.length,
        products
        

    })
}

const getAllproduct = async (req, res) => {
    const {featured, company, name} = req.query;
    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === "true" ? true : false;
    }

    if(company) {
        queryObject.company = company   
    }

    if (name) {
        queryObject.name = name
    }
    
    console.log((queryObject));
    
    const products = await Product.find(queryObject)
    return res.status(200).json({
        message: `Success ..........`,
        nbHits: products.length,
        products
        

    })
}


module.exports = {
    getAllproductStatic,
    getAllproduct
}
