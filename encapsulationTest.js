// encapsulation of data can be achieved using one of the three methods. ... 

//1. declaring the private members as internal varaibles. 

//2. using closures. 


//An example of using the closures. 


function foo(){
    var a = 10;
    function bar(){
        a *= 2;
        return a;
    }
       return bar;
}

var baz = foo();
console.log(baz());
console.log(baz());
console.log(baz());

var blat = foo();
console.log(blat());

//throw new Error("I was thrown from error");
// using closures for the encapsulation . 
//
var Book = function(newIsbn, newTitle, newAuthor){
    
    var isbn, title, author;
    
    isbn = newIsbn;
    title = newTitle;
    author = newAuthor;
    
    //private method
    function checkIsbn(newIsbn){
        // psedo method
        return true;
    };
    
    // priviledge methods.
    this.getIsbn = function(){
          return isbn;
    };
    
    this.setIsbn = function(newIsbn){
         if(!checkIsbn(newIsbn)){
             throw new Error("Invalid ISBN number");
         }
        isbn = newIsbn;
    };
    
    this.getTitle = function(){
        return title;
    };
    this.setTitle = function(newTitle){
        title = newTitle || 'No title specified';
    };
    
    this.getAuthor = function(){
        return author;
    };
 
    this.setAuthor = function(newAuthor){
        author = newAuthor || 'No Author specified';
    };
 
}

var FirstBook = new Book(123,'Gootle','vaishvik');
console.log(FirstBook.getTitle());
console.log(FirstBook.getAuthor());
console.log(FirstBook.getIsbn());

//FirstBook.checkIsbn();
console.log(FirstBook.title);