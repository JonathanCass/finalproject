var express = require('express');
var router = express.Router();

/* GET home page. */

//CONNECT TO DATABASE 
//host: 'http://10.68.0.58',
const mysql = require('mysql')
const conn = mysql.createConnection({
//   host     : 'http://10.68.0.58',
  host     : 'localhost',
  user     : 'project',
  password : '-?AT6.GFaj`z%Uja',
  database : 'project'
});

conn.connect()

router.get('/activities', function(req, res){
    conn.query('SELECT * FROM activities', function(err, results){
        var response = {
            activities: results
        }
        res.json(response)
    })
})

router.get('/event', function(req, res){
    conn.query('SELECT * FROM event', function(err, results){
        var response = {
            event: results
        }
        res.json(response)
    })
})


router.get('/parks', function(req, res){
   conn.query('SELECT * FROM parks', function(err, results){
       console.log(results)
       var response = {
           parks: results
       }

       res.json(response)
   })
})

router.get('/parks_activities', function(req, res){
   conn.query('SELECT * FROM parks_activities', function(err, results){
       console.log(results)
       var response = {
           parks_activities: results
       }

       res.json(response)
   })
})

router.get('/users', function(req, res){
    conn.query('SELECT * FROM users', function(err, results){
        var response = {
            users: results
        }
        res.json(response)
    })
})

router.get('/users_activities', function(req, res){
    conn.query('SELECT * FROM users_activities', function(err, results){
        var response = {
            users_activities: results
        }
        res.json(response)
    })
})

module.exports = router;
