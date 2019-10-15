
//import files from ("../json/pdf.json") ;

var files  = require("../json/pdf.json") ;
const fs = require('fs');
const pdf = require('pdf-parse');


// error file 
//"/data/symfony/docarchiver/app/imageTest/nf_2016_12_02.pdf"
// ,"/data/symfony/docarchiver/images/BBC_Sacha_camp_2019.pdf"
for(var x in files){
    console.log("------------------------------------")
    console.log(files[x]) ;

    let dataBuffer = fs.readFileSync(files[x]);
    
    try{
        pdf(dataBuffer).then(function(data) {
        
            /*
            // number of pages
            console.log(data.numpages);
            // number of rendered pages
            console.log(data.numrender);
            // PDF info
            console.log(data.info);
            // PDF metadata
            console.log(data.metadata); 
            // PDF.js version
            // check https://mozilla.github.io/pdf.js/getting_started/
            console.log(data.version);
            // PDF text
            console.log(data.text); 
              */  
        });

    }
    catch(e){
        console.log("error") ;
    }
}