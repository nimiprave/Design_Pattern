/* prototypial inheritence. 
1) first create an object literal. 
2) use the clone function to make a copy.
3) Re-define the methods in the cloned copy. 
*/

//clone function:
function clone(source){
    function F(){};
    F.prototype = source;
    return new F();
}

// Object literal

var Person = {
    name : 'defaultName',
    getName : function(){
        return this.name; 
    }
}

console.log("person object literal:");
console.log(Person.getName());

var newPerson = clone( Person );
console.log("newPerson object:");
console.log(newPerson.getName());

newPerson.name = 'changed name to nirmal';
console.log("person object literal:");
console.log(Person.getName());
console.log("newPerson object:");
console.log(newPerson.getName());

var author = clone(Person);
author.name = 'Author Object';
author.books = ['grand','heist'];
author.getBooks = function(){
    return this.books;
}
console.log("Author object:");
console.log(author.getName());
console.log(author.getBooks());

console.log("person object literal:");
console.log(Person.getName());

var firstAuthor = clone(author);
console.log("first Author Object");
console.log(firstAuthor.getBooks());
firstAuthor.books[2] = 'Third Book';
console.log("first Author Object");
console.log(firstAuthor.getBooks());
console.log("Author Object");
console.log(author.getBooks());













