'use strict';

exports.index = function(req, res){
  res.render('home/index');
};

exports.about = function(req, res){
  res.render('home/about');
};

exports.faq = function(req, res){
  res.render('home/faq');
};

exports.contact = function(req, res){
  res.render('home/contact');
};

