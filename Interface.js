/* Emulating Interface using comments

interface Composite{
 function add(child);
 function remove(child);
 function getChild(index);
}

interface formItem{
function save();
}
*/

var CompositeFarm = function(id,method,action){};

// Implement the component interface.

CompositeFarm.prototype.add = function(child){};
CompositeFarm.prototype.remove = function(child){};
CompositeFarm.prototype.getChild = function(index){};
CompositeFarm.prototype.save = function(){};


// Implementing the interface using attribute checking. 

/* Emulating Interface using comments
interface Composite{
 function add(child);
 function remove(child);
 function getChild(index);
}
interface formItem{
function save();
}
*/

var compositeFarm = function(id,method,action){
    this.implementInterfaces = ['Composite','FormItem'];
}

// function for inheritence check. 
function inheritenceCheck(nObject){
    for(var i = 1; i < arguments.length;i++){
        var interfaceName = arguments[i];
        var interfaceFound = false;
            for( var j=0; j < nObject.implementInterfaces.length; j++){
                    if(interfaceName === nObject.implementInterfaces[j]){
                       interfaceFound = true; 
                        break;
                    }
            }
        if(!interfaceFound){
            return false;
        }
    }
    return true;
}

var formInstance = {
    implementInterfaces : ['Composte','Form']
};
console.log("Inheritence is implemented:  " + inheritenceCheck(formInstance));

