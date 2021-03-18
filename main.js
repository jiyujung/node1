// const 확실히 값이 안바뀌는것
// let 확실히 값이 바뀌는것
// 바뀔지 안바뀔지 애매할 때 -> 일단 const로 선언해봄

// node.js가 제공한 api
const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer(function (req, res) {
    let _url = req.url
    const queryData = url.parse(_url, true).query
    //console.log(queryData.id);
    let title = queryData.id;
    let filePath = queryData.id;

    if (_url === '/') {
        //_url = '/index.html';
        title = 'Welcome'
        filePath = 'welcome';
    }
    if (_url === '/favicon.ico'){
        res.writeHead(404, {"content-Type": "text/palin"});
        res.write("404 Not found");
        res.end();
    }

    // header로 보내는 부분
    res.writeHead(200)
    fs.readFile(`data/${filePath}`, 'utf8', function (err, data) {
        const template = `
<!doctype html>
<html lang="ko">
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.html">WEB</a></h1>
  <ol>
    <li><a href="/?id=HTML">HTML</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p>${data}</p>
</body>
</html>
  `;
        res.end(template);
    });
    //res.end(queryData.id);
    //res.end(fs.readFileSync(__dirname + url));
    //console.log(__dirname + req.url);    // 서버에서 이 파일의 내용을 그대로 보내겠다
    // res.end("hello egoing");
    // body로 보내는 부분
    //res.end("hello egoing");
});
app.listen(3000);