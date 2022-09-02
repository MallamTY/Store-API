

const notFound = (req, res) => {
    return res.status(404).json({
        message: `Bad request !!!!!!!!!!!`
    })
}


module.exports = notFound