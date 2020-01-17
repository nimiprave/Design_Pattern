//(function myFunction() {
//    var a = 4;
//    console.log( a * a);
//   // return a * a;
//})();

//Problem:
//=======

//function add() {
//    var counter = 0;
//    counter += 1;
//    return counter;
//}
//
//console.log(add());
//console.log(add());
//console.log(add());

 //Another alternative

var v = (function (){
    var counter = 0;
    return function(){
            return counter += 1;    
    };
})();

console.log(v());
console.log(v());
console.log(v());

// closure function 

//var add = (
//  function(){
//       var counter = 0;    
//      return function(){
//        return ++counter;
//    }
//}
//)();

//console.log(add());
//console.log(add());
//console.log(add());