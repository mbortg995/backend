import http from 'http';
import fs from 'fs';
import { upperCase, localeUpperCase } from "upper-case";

http.createServer((req,res)=> {
  fs.readFile('./index.html', (error, data) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8', });
    res.write(data);
    res.end();
  });

  }
).listen(8080);