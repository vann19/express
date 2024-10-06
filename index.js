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

app.get('/blog/:judul', (req, res) => {
    const { judul } = req.params
    res.send(`ini adalah halaman ${judul}`)
});

app.get('/blog/:category/:judul/:author', (req, res) => {
    const { category, judul, author } = req.params
    res.send(`blog dengan category: ${category} | Author : ${author} | ${judul}`)
});

app.get('/*', (req, res) => {
    res.send('Halaman tidak ditemukan')
});

app.listen(8080, () => {
    console.log('server di running di port: http://localhost:8080')
});