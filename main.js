// const 확실하게 값이 안바뀌는 것
// let 확실히 값이 바뀌는 것
// 바뀔지 안바뀔지 애매할 때 -> 일단 const로 선언해봄

// node.js가 제공한 api
const http = require('http');
const fs = require('fs');

const app = http.createServer(function (req, res){
    let url = req.url;
    if(url == '/')
        url = '/index.html';
    if(url == '/favicon.ico')
        return res.writeHead(404);

    // header로 보내는 부분
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
    //console.log(__dirname + req.url);    // 서버에서 이 파일의 내용을 그대로 보내겠다
    // res.end("hello egoing");
    // body로 보내는 부분
    //res.end("hello egoing");
})

app.listen(3000);