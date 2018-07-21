# http-post
我的专业知识还是需要补充的.关于http的post请求,了解的有点少.  

4种常见数据的post方法,分别是www-form-urlencoded,form-data,application/json,text/xml.  
[解析](https://www.jianshu.com/p/606802e40fd5)

express依赖bodyParser对于请求包体进行解析.
## code
```
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {

   console.log(req.body);
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("server running at http://%s:%s", host, port)
});

```
```
<html>
<body>
<form action="http://127.0.0.1:3000/" method="post">
phone: <input type="text" name="phone"/>
<input type="submit" value="Submit"/>
</form>
</body>
</html>
```