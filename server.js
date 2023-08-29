// Butuh express, makanya dipanggil
const express = require("express")
const path = require("path")
app = express()

// Ambil Controller
const artikel_list = require('./controllers/Artikel/ListArtikel/ListArtikelController')

//nge set engine viewnya pake ejs
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");
app.use('/assets', express.static(__dirname + '/public/assets'))


// ngeroute ke halaman utama
app.get("/", function (req, res) {
    res.render("pages/index")  
})

// ngeroute artikel list
app.use('/artikel/list', artikel_list)

// buat servernya
app.listen(8080, function() {
    console.log("Server is running bro")
})