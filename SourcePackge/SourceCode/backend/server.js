const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const apiRoutes = require('./api_routes')

app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
})