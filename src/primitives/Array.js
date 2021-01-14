
    
Array.prototype.removeString=function(o){
    const index = this.indexOf(o);
    if (index > -1) this.splice(index, 1);
} ;

Array.prototype.copy = function(sourceArray){
  
    for (var i = 0; i < sourceArray.length; i++) {
         this.push({...sourceArray[i]}) ;
         console.log(this) ;
    }
} ;

Array.prototype.isInArray = function(obj){
    for (var i = 0; i < this.length; i++) {
         if( this[i] == obj){
            console.log("equal", obj,  this[i]) ;
            return true ;
         }
    }
    return false ;
} ;

Array.prototype.removeObject = function(obj){
    var index = [] ;
    for (var i = 0; i < this.length; i++) {
         if( this[i] == obj){
             index.push(i) ;
         }
    }

    for(var i =0;i<index.length;i++){
        this.splice(index[i],1) ;
    }

    return false ;
} ;


Array.prototype.explode = function(s,sep=","){
    this = s.split(sep) ;
} ;

Array.prototype.containsObject = function(obj) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] == obj) {
            return true;
        }
    }
    return false;
}
 
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

