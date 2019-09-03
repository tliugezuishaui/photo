//引入express模块
var express = require('express');

//引入body-parser
var body_parser = require('body-parser');

//引入router路由对象
var router = require('./server/router.js');

//创建服务器对象
var app = express();

//静态化web目录
app.use('/web/', express.static('./web'));

//配置body_parser
app.use(body_parser.urlencoded({extended: false}));



//挂载路由对象
app.use(router);

//监听端口号
app.listen(3000);