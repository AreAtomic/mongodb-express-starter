const errorHandler = (err, req, res, next) => {
    console.log("Error handler", err)
    res
        .status(500)
        .json({ message: err.message, error: err.options?.cause || err.cause })
}

module.exports = errorHandler
