
var _ = require('lodash');

const arr = require('./Array.js') ;
var data = require("../../data/address.json") ;


//var x = new myarr(data) ;
//console.log( x.tostring() ) ;

console.log( data.filterfield("first_name", "Ch",1).filterfield("last_name","c",1) ) ;

console.log("---------------------") ;

//console.log( data.filterfield( ["first_name","last_name"], ["Ch","c"],1)) ;


var x = ["this", "is", "a", "sentence"] ;

console.log( x.implode("-") ) ;

var y = "bonjour,les,amis,yeah"