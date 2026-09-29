const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).send('ok')
})

app.use(express.static('dist'))

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()