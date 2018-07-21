# ajax的设计方案
由于前后端分离,前端ajax的请求涉及到跨域问题.  
关于跨域的解决方式当中,最为常用的是jsonp和cors.我们需要实现http.post请求,所以无法使用jsonp形式,所以使用cors的方式首先实现.
