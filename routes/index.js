var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var data = {'grid': false, 'projdata': projects};
  	res.render('index', data);
};

exports.viewGrid = function(req, res){
	var data = {'grid': true, 'projdata': projects};
  	res.render('index', data);
};