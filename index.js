import http from 'http';

http.createServer((req,res)=> {
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8', });
    res.end('Aprendiendo en The Bridge!');
}).listen(8080);