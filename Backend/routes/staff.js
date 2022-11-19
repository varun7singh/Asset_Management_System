const { Router } = require("express");
const express = require("express");
const routes = express.Router();

const {protect} = require('../middleware/protect')

const {
    getAllStaff,getStaffById,getStaffActivity
} = require('../controllers/staffControllers');

routes.route('/api/v1/staff').get(protect, getAllStaff)
routes.route('/api/v1/staffid').post(protect, getStaffById)
routes.route('/api/v1/staffactivity').post(protect, getStaffActivity);

module.exports = routes