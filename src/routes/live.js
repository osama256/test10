const express = require('express')
const router = express.Router()
router.get('/api/web/live', async (req, res) => {
        return res.send("connected!")
})
module.exports =router 