
Array.prototype.tostring = function(){
    return "array size=" + this.length ;
} ;

Array.explode = function(s,sep=","){
    this = s.split(sep) ;
} ;
 
Array.prototype.implode = function(sep=","){
    var ret ="" ;
    for(var i=0;i<this.length;i++){
        if (typeof this[i] === 'string' || this[i] instanceof String )
            ret = ret + sep + this[i] ;
    }
    return ret ;
} ;

Array.prototype.filterfield=function(name,value,algo=0){
    // 0 = includes
    // 1 = start with
    // 2 = absolute value
    function mycompare(field, value, item){
        if (item[field] == undefined)
            throw `field ${field} is not defined` ; 

        switch(algo){
        case 0:
            return item[field].toLowerCase().includes( value.toLowerCase() ) ;
        case 1: 
            return item[field].toLowerCase().startsWith( value.toLowerCase() ) ;
        case 2:
            return item[field].toLowerCase() == value.toLowerCase() ;
        default:
            throw `algo is not defined` ; 
        }
    } ;
     
    let newarr = this.filter( mycompare.bind(this,name,value) ) ;
    return newarr ;
} ;

