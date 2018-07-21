# js-server's design
js-server按照itxia-web项目的要求实现前后端分离。

## 前后端分离主要实现
前后端分别使用两个http-server。总体设计当中要求，前端的http-server放在nginx当中，后端在docker当中运行。
前端部分的http-server实现简单,在这里不做考虑.  
后端部分的http-server实现相对复杂,需要在这里加以设计.
前后端权限部分以token实现,之后以json数据的方式完成.

## js-server主要内容
js-server使用express框架对此进行实现.
主要甚至是全部使用http.post的方式实现,不使用get.
前后端实现加密.加密方案有待讨论.

## 前后端接口设计
参考[IT侠杂乱需求文档](https://www.zybuluo.com/tipwheal/note/1215471)
主要实现post方式获取信息,之后对于数据库处理之后返回信息.