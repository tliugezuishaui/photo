//引入express
var express = require('express');

//定义路由对象
var router = express.Router();

//处理请求
router.get('/check', function() {
    console.log(123);
})

//暴露接口
module.exports = router;