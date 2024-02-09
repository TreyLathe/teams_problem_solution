<<<<<<< HEAD
const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/views', userRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
=======
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
>>>>>>> 42967ba851be3c447591bd17f8a100b6254a6e88
