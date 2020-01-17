// testing the inheritence class

//function Person(name){
//    this.name = name;
//}
//Person.prototype.getName = function(){
//    return this.name;
//}
//var per = new Person("nirmal");
//console.log(per.getName());
//
//
//function Author(name, book){
//    Person.call(this,name);
//    this.book = book;
//}
//Author.prototype = new Person();
//Author.prototype.constructor = Author;
//Author.prototype.getBooks = function(){
//    return this.book;
//}
//
//var author = [];
//author[0] = new Author('Duet in Diaz',['Java Design Patterns']);
//author[1] = new Author('Love Romeo','Java Books');
//
//console.log(author[0].getName(),author[0].getBooks());
//console.log(author[1].getName(),author[1].getBooks());
//
//console.log("=======================================");
//
//function extend(subClass, superClass){
//    var f = function(){};
//    
//    
//}


// copy function
function clone(object){
    function F(){};
    F.prototype = object;
    return new F();
}
var Person = {
    name : 'defaultName',
    getName : function (){
        return this.name;
    }
}
var author = clone(Person);

console.log(author.toString());
console.log(author.name);
console.log(author.getName());
author.name = 'nirmal';
console.log(author.name);
console.log(author.getName());
console.log(Person.name);
console.log(Person.getName());

author.getName = function(){
    return this.name + 'Something added';
}

console.log(author.getName());




if( 
    ( 
        ("TASKB"='') and                      ("VALUE_FROM"='')and
        ("COUNT">='1') 
    ),'','X'
)

if( 
    ( 
        ("TASKB"='') and               ("VALUE_FROM"='')and
        (int("COUNT") >=1) 
    ),'','X'
)







