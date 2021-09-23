// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var pwController = require('./pwController');
// Contact routes
router.route('/book')
    .get(pwController.index)
    .post(pwController.new);
router.route('/book/:site')
    .get(pwController.view)
    .patch(pwController.update)
    .put(pwController.update)
    .delete(pwController.delete);
// Export API routes
module.exports = router;
