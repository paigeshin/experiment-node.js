const
    express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
   res.render('wzrecorder/demo');
});


module.exports = router;