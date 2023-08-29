const express = require('express')
const router = express.Router()

var connection = require('../../../lib/database')

router.get('/', function(req, res) {
    connection.query("SELECT * FROM list_artikel ORDER BY id_artikel asc", function (err, rows) {
        // res.send("List route is displaying data")
        if(err) {
            req.flash('error', err.message)
            res.render('pages/index', {
                data: ''
            })
        } else {
            res.render('pages/artikel/list/index', {
                data: rows
            })
        }
    })
})

module.exports = router