const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
//const io = require('socket.io')(server)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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

app.get('/activities', function(req, res){
    conn.query('SELECT * FROM activities', function(err, results){
        var response = {
            activities: results
        }
        res.json(response)
    })
})

app.get('/event', function(req, res){
    conn.query('SELECT * FROM event', function(err, results){
        var response = {
            event: results
        }
        res.json(response)
    })
})


app.get('/parks', function(req, res){
   conn.query('SELECT * FROM parks', function(err, results){
       console.log(results)
       var response = {
           parks: results
       }

       res.json(response)
   })
})

app.get('/parks_activities', function(req, res){
   conn.query('SELECT * FROM parks_activities', function(err, results){
       console.log(results)
       var response = {
           parks_activities: results
       }

       res.json(response)
   })
})

app.get('/users', function(req, res){
    conn.query('SELECT * FROM users', function(err, results){
        var response = {
            users: results
        }
        res.json(response)
    })
})

app.get('/users_activities', function(req, res){
    conn.query('SELECT * FROM users_activities', function(err, results){
        var response = {
            users_activities: results
        }
        res.json(response)
    })
})


// app.get("*", function(req, res){
//     res.sendfile(__dirname + '/client/public/index.html')
// })

// app.get("/api", function(req, res){
//     res.json({
//         "foo":"bar"
//     })
// })

// io.on('connection', function(socket){
//     socket.on('addMessage', function(message){
//         io.emit('newMessage', message)
//     })
// })

server.listen(3001, function(){
    console.log('listening on port 3001')
})