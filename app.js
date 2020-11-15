var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
//const hnews = require('./models/hnews.js');
//const hnews = require('./models/hnews');
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());
hnews = require('./models/hnews.js')
mongoose.connect('mongodb://127.0.0.1:27017/hackernews');
var db = mongoose.connection;
app.get('/api/hnews',function(req,res){
    hnews.gethnews(function(err,hnews){
        if(err){
            throw err;
        }
        res.json(hnews);
    });
})
app.post('/api/hnews', function(req, res){
	var hnew = req.body;
	

    hnews.addhnews(hnew, function(err, hnew) {
		if(err){
			throw err;
		}
		res.json(hnew);
	});
});
app.put('/api/hnews/:_id', function(req, res) {
	var id = req.params._id;
	var a  = req.body; 
	hnews.updatehnews(id,a, {}, function(err,a)  {
		if(err){
			throw err;
		}
		res.json(a);
	});
});

app.delete('/api/hnews/:_id', function(req, res) {
	var id = req.params._id;
	hnews.removehnews(id, function(err, hnew) {
		if(err){
			throw err;
		}
		res.json(hnew);
	});
});
app.get('/',function(req,res){
    res.send("hellworld")
})
app.listen(3000);
console.log('running on port')
