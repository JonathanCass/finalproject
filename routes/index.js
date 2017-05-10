var express = require('express');
var router = express.Router();
// const sha1 = require('sha1')

/* GET home page. */

//CONNECT TO DATABASE 
// host: 'http://10.68.0.58',
const mysql = require('mysql')
const conn = mysql.createConnection({
  host     : 'http://10.68.0.58',
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
       var response = {
           parks: results
       }

       res.json(response)
   })
})

router.get('/parks_activities', function(req, res){
   conn.query('SELECT * FROM parks_activities', function(err, results){
      //  console.log(results)
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

router.get('/usersId', function(req, res){
    conn.query('SELECT id FROM users order by id desc limit 1;', function(err, results){
        var response = {
            usersId: results
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

router.get('/event', function(req, res){
    conn.query('SELECT * FROM event', function(err, results){
        var response = {
            event: results
        }
        res.json(response)
    })
})

router.get('/availability', function(req, res){
  console.log('availability', res)
    conn.query('SELECT * FROM availability', function(err, results){
        var response = {
            availability: results
        }
        res.json(response)
    })
})


///using /activities as a test

// router.post('/activities', function(req, res){
//   var sql = 'INSERT INTO activities (id, name) VALUES (?, ?)'

//   conn.query(sql, [req.body.id, req.body.name], function(err, results){
//         res.json({
//           'message':'Activity Added'
//         })
//   })
// })

router.post('/users', function(req, res){
  console.log('client post', res.body)
  var sql = 'INSERT INTO users (fname, lname, email, avatar, bio, privacy, activities_info, hobbies, interests, age, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

  conn.query(sql, [req.body.fname, req.body.lname, req.body.email, req.body.avatar, req.body.bio, req.body.privacy, req.body.activities_info, req.body.hobbies, req.body.interests,req.body.age,req.body.gender], function(err, results){
    if(err){
      res.json({
        'message':'Error... User Not Added'
      })
    }
     res.json({
       'message':'User Added'
     })
  })
})

router.post('/event', function(req, res){
  var sql = 'INSERT INTO event (user_id1, user_id2, activity_id, park_id, time_start_hour, time_start_suffix, date_day, date_month) VALUES (?,?,?,?, ?, ?, ?, ?)'

  conn.query(sql, [req.body.user_id1, req.body.user_id2, req.body.activity_id, req.body.park_id, req.body.time_start_hour, req.body.time_start_suffix, req.body.date_day, req.body.date_month], function(err, results){
    if(err){
      res.json({
         'message':'Error... Event Not Added'
      })
    } else 
    res.json({
      'message': 'Event Added'
    })
  })
})



router.post('/availability', function(req, res){
  var sql = 'INSERT INTO availability ( user_id, quadrant, day_of_week, from_num, from_suffix, to_num, to_suffix) VALUES (?, ?, ?, ?, ?, ?, ?)'

  conn.query(sql, [req.body.user_id, req.body.quadrant, req.body.day_of_week, req.body.from_num, req.body.from_suffix, req.body.to_num, req.body.to_suffix], function(err, results){
    if(err){
      res.json({
        'message': 'Error... Availability Not Added'
      })
    } else
    res.json({
      'message': 'Added Availability'
    })
  })
})

router.post

module.exports = router;
