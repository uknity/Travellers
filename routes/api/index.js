const router = require('express').Router();
const travellerRoutes = require('./travellerRoutes');
const locationRoutes = require('./locationRoutes');
const tripRoutes = require("./tripRoutes");

router.use('/', travellerRoutes);
router.use('/locations', locationRoutes);
router.use('/tripRoutes', tripRoutes);

module.exports = router;
