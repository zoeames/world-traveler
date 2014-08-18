'use strict';

exports.index = function(req, res){
  res.render('home/vacations');
};

exports.init = function(req, res){
  res.render('vacations/init');
};

