const { Router } = require('express');
const { getListas, postListas, deleteFavorito } = require('../controllers/listados');

const router = Router();

router.get('/', getListas);
router.post('/', postListas);


module.exports = router;