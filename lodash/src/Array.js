Array.prototype.tostring = function(){
    return "array size=" + this.length ;
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

