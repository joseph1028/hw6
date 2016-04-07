var Person = require('../models/person');

module.exports = (req, res, next)=>{
	// res.send('Thank you!');
	var person = new Person({
		username: req.body.username,
		workname: req.body.workname,
		time: req.body.time,
		content: req.body.content,
	});
	person.save(function(err){
		if (err) throw err;
		console.log('person saved!');
	}).then(
		Person.find({}, function(err, users) {
			if (err) throw err;

			res.render('index', {userinfos: users});
		})
	);
}
