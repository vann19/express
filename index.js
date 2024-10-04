const express = require('express');
const app = express();

app.use((req, res) => {
    console.log('Berhasil')
    res.send('string biasa')
});

app.listen(8080, () => {
    console.log('server di running di port: http://localhost:8080')
});