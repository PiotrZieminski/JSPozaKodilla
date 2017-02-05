define([], function() {
    function id() {
        var id = 0;
    
        return function() {
            return ++id;
        }
    }

    var getId = id();

    return {
        getId: getId,
    };
});