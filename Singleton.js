var Singleton = {
    att1 : true, 
    att2 : 10, 
    method1 : function (){
    console.log("inside Method one");
}
}
console.log(Singleton.att1);
Singleton.method1();
delete Singleton.att2;
console.log(Singleton.att2);


var Nirmal = {};
Nirmal.singleton={
    att1 : 'nirmal space on', 
    att2 : 450, 
    method1 : function (){
    console.log("inside Nirmal Space Method one");
        }
}
Nirmal.singleton.method1();
console.log(Nirmal.singleton.att1);