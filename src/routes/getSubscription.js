const express = require('express')
const router = express.Router()
router.post('/api/web/subscription', async (req, res) => {
        return res.send({android:{price:"14.5",productId:"mansour_14.5_m"},ios:{price:"14.5",productId:"mansour_14.5_m"}})
})
module.exports =router 