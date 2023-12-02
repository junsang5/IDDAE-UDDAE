const express = require('express'); // import express framework
const app = express(); // express의 instance -> app 생성 (for middleware function)
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/html/login.html'));
})
app.get('/main.html', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'main.html'));
    res.sendFile(path.join(__dirname, '..', 'public/html/main.html'))
    const code = req.query.code;
    console.log(code);
    const data = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code:code,
        }),
    }
    fetch('http://localhost:4000/token', data)
    .then((res)=>{
        res.text()
        console.log(data)
    })
    .catch((err)=>{
        console.error(err)
    });
})
app.listen(port, () => { // port, hostName, () 으로 인자를 하나 추가하여 직접 호스트명 선언 가능
    console.log(`express is running on ${port}`);
})