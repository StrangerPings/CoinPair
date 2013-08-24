var pg = require('pg');


pg.connect(function(err, client, done) {
	if (err) {
		console.log('setup err: ' + err);
	} else {
		connected = true;
		client.query('CREATE TABLE IF NOT EXISTS addresslist (id serial, sender varchar(35), input varchar(35), output varchar(35), receiver varchar(35));', function(err, response) {
			if (err) {
				console.log('ubase create err: ' + err);
			} else {
				console.log('Database created!');
			}
			done();
		});
	}
});