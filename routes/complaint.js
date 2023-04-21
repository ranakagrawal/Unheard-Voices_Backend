const express = require('express')

const router = express.Router()

const ComplaintController = require('../controllers/complaintController')


// Add new complaint by users
router.post(
    '/complaints/add',
    ComplaintController.addComplaint 
)

router.get(
    '/complaints/get',
    ComplaintController.getComplaints 
)

module.exports = router
