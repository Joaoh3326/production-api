const router = require('express').Router();
const userControllers = require('./../controllers/user');

router.get('/users', userControllers.get);
router.post('/users', userControllers.create);
router.put('/users/:id', userControllers.update);
router.delete('/users/:id', userControllers.delete);

module.exports = router;
