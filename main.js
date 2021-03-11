// const 확실하게 값이 안바뀌는 것
// let 확실히 값이 바뀌는 것
// 바뀔지 안바뀔지 애매할 때 -> 일단 const로 선언해봄

const http = require('http');

const app = http.createServer(function (req, res){
    res.writeHead(200);
    console.log(__dirname + req.url);
    res.end("hello egoing");
})

app.listen(3000);