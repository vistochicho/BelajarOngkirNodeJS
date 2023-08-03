// Butuh express, makanya dipanggil
const express = require("express")
const path = require("path")
app = express()


//nge set engine viewnya pake ejs
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");
app.use('/assets', express.static(__dirname + '/public/assets'))

// ngeroute ke halaman utama
app.get("/", function (req, res) {
    res.render("pages/index")  
})

app.get("/artikel/list", function (req, res) {
    res.render("pages/artikel/list/index")
})

// buat servernya
app.listen(8080, function() {
    console.log("Server is running bro")
})