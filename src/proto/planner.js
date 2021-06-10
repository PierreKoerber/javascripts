Date.prototype.addDays = function (num) {
    var value = this.valueOf();
    value += 86400000 * num;
    return new Date(value);
} ;

Date.prototype.toString =function() {
  return [this.getDate(), this.getMonth()+1, this.getFullYear()]
      .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
} ;

var planner = {
	
	generateSheet(lines, startDate, endDate){
   			var sheet = [] ;        	
        for(let i = 0;i<lines.length;i++){
        	let row = this.generateRow(lines[i], startDate, endDate) ;
          sheet.push(row) ;
        }
        return sheet ;
  },
  
  generateRow(name, startDate, endDate){
  		var currentDate = startDate ; 
      var line = [] ;
      
      while (currentDate <= endDate) {  
          line.push(  this.generateCell(name, currentDate) ) ;
          currentDate = currentDate.addDays(1);
          } 
      return line ;
  },
  
  generateCell(name, dDate){
  		return  {
          		"name": name,
          		"date": dDate
              } ;
  }

} ;


new Vue({
  el: "#app",
  data: {
  	people:  ["pierre", "gary", "eddie"],
    d1:null,
    d2:null,
    sheet:null,
    todos: [
      { text: "Learn JavaScript", done: false },
      { text: "Learn Vue", done: false },
      { text: "Play around in JSFiddle", done: true },
      { text: "Build something awesome", done: true }
    ]
  },
  mounted(){
  	
    this.d1 = new Date(2021, 5, 1) ;
    this.d2 = new Date(2021, 5, 30) ;

		this.people = ["pierre", "gary", "eddie"] ;

		this.sheet = planner.generateSheet(this.people, this.d1,this.d2 ) ;
  },
  methods: {
  	toggle: function(todo){
    	todo.done = !todo.done
    }
  }
})