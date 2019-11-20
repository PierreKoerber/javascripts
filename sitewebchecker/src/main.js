//
// (c) pierre koerber - all right limited
//

var mysql = require('mysql')
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'sitewebbackup'
}) ;


var pdf = '../pdf.txt' ;
var res = [] ;
var fs = require('fs');

connection.connect() ;

require('fs').readFileSync(pdf, 'utf-8').split(/\r?\n/).forEach(function(line){
	//  console.log(line);
	var sfilename = line.split("/").pop() ;
	// console.log(sfilename) ;
	// create the sql query 
	var sql = "select * from joomla_content where introtext like '%##%' ;" ; 
	sql = sql.replace("##", sfilename) ;
	connection.query(sql,
        function(err,rows, fields){

                if (!err){
					if (rows.length){
						
						var newobj = {
							"pdf": sfilename,
							"file": line,
							"joomlaid": rows[0].id,
							"title": rows[0].title,
							"alias": rows[0].alias
						} ;

						res.push(newobj) ;
						fs.writeFile ("result.json", JSON.stringify(res), function(err) {
							if (err) throw err;
							console.log('complete');
							}
						);
					}else{
						var newobj = {
							"pdf": sfilename,
							"file": line,
							"joomlaid": "noid",
							"title": "noid",
							"alias": "noid"
						} ;

						res.push(newobj) ;
						fs.writeFile ("result.json", JSON.stringify(res), function(err) {
							if (err) throw err;
							console.log('complete');
							}
						);


					}
				}
                else
						console.log(err) ;
						

			}) ;
}) ;

connection.query('select * from joomla_content', 
	function(err,rows, fields){
		if (!err)
			console.log("ok") ;
		else
			console.log(err) ;
	}
) ;




connection.end() ;





