const express = require('express');
const app = express();

app.use(() => {
    console.log('Hello express')
})

app.listen(8080, () => {
    console.log('server di running di port: http://localhost:8080')
})