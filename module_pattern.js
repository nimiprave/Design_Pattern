var MyModule = (
    function () {
        return {
            init: function (sName) {
                sMyName = sName;
            },
            displayUserName: function () {
                console.log(sMyName);
            }
        }
    }
)();

MyModule.init("Nirmal");
MyModule.displayUserName();
