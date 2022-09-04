const express = require("express");;



const getAproduct = async (req, res) => {
    throw new Error ('Something went wrong')
    return res.status(200).json({
        message: `Here you have the single element`
    })
}


module.exports = {
    getAproduct
}
