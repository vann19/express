const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('Berhasil')
//     res.send('string biasa')
// });

app.get('/', (req, res) => {
    res.send('ini adalah halaman home')
});

app.get('/about', (req, res) => {
    res.send('ini adalah halaman about')
});

app.post('/about', (req, res) => {
    res.send('ini adalah post about')
})

app.get('/contact', (req, res) => {
    res.send('ini adalah halaman Contact')
});

app.get('/*', (req, res) => {
    res.send('Halaman tidak ditemukan')
});

app.listen(8080, () => {
    console.log('server di running di port: http://localhost:8080')
});