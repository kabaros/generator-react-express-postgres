const express = require('express')
const router = express.Router()
const db = require('../helpers/db')

router.get('/status', async (req, res) => {
  const data = await db.getStatus()
  res.send(data)
})

module.exports = router
