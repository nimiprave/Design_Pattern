function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

// instance of Person Object
var Nirmal = new Person('Nirmal');
console.log("Nirmal Instance");
console.log(Nirmal.getName());
console.log("=======================================");

// creating author class inheriting from the person class.

function Author(name, books){
    Person.call(this,name);
    this.books = books;
}
Author.prototype = new Person();
Author.prototype.constructor = Author;
Author.prototype.getBooks = function(){
    return this.books;
}

var tim = new Author('Robins',['East India','South India']);
console.log(tim.name);
console.log(tim.getName());
console.log(tim.getBooks());

for( key in Person.prototype){
console.log(Person.prototype[key].toString());    
}
console.log("=========Arthur class==================");

for( key in Author.prototype){
console.log(Author.prototype[key]);    
}

