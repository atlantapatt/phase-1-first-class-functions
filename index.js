function callBackFunction() {
    console.log("hello")
}
function receivesAFunction(callBackFunction) {
    callBackFunction()
}

let returnsANamedFunction = function() {
    function namedFunction() {
        console.log("I am angry")
    }
    return namedFunction
}
function returnsAnAnonymousFunction() {
    return (function() {
        return "hello"
    })
}