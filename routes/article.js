let express = require('express');
let router = express.Router();
router.get('/add',function(req,res){
    res.send('文章页')
})
module.exports = router;