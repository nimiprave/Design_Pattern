function dieToss(){
    setTimeout(function(){
        return Math.floor(Math.random() * 6 ) + 1;    
    },200);
}

//console.log('1');
//var promise = new Promise(function(fullfill, reject){
//    var n = dieToss();
//    if(n === 6){
//        fullfill(n);
//    }else{
//        reject(n);
//    }
//    console.log('2');
//});
//
//promise.then(function(toss){
//     console.log('Yay, threw a ' + toss + '.'); 
//},function(toss){
//     console.log('Oh, noes, threw a ' + toss + '.');  
//});
//console.log('3');

function tossASix(){
    return new Promise(function(fullfill,reject){
        var n = Math.floor(Math.random() * 6) + 1;
        if(n === 6){
            fullfill(n);
        }else{
            reject(n);
        }
    });
}

function logAndTossAgain(toss){
    console.log("Tossed a " + toss + ", need to try again.");
    return tossASix();
}

function logSuccess(toss){
     console.log("Yay, managed to toss a " + toss + ".");
}
function logFailure(toss){
     console.log("Tossed a " + toss + ". Too bad, couldn't roll a six"); 
}

tossASix()
    .then(null,logAndTossAgain)
    .then(null,logAndTossAgain)
    .then(logSuccess,logFailure);
