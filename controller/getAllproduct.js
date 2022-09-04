const express = require("express");
const Product = require('../model/productModel')



const getAllproductStatic = async (req, res) => {
    const products = await Product.find({}).select('name price')
    return res.status(200).json({
        message: `Success ..........`,
        nbHits: products.length,
        products
        

    })
}

const getAllproduct = async (req, res) => {
    const {featured, company, name, sort, fields} = req.query;
    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === "true" ? true : false;
    }

    if(company) {
        queryObject.company = company   
    }

    if (name) {
        queryObject.name = {$regex: name, $options: 'i'}
    }

    let result = Product.find(queryObject)

    // Sorting the contents of the database

    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
        
    } else {
        result = result.sort('createdAt')
    }

    // Selecting the contents to return from the database based on values supplied by the user

    if (fields) {
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }

    
    const products = await result
    
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
