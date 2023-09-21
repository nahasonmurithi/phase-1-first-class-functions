function receivesAFunction(callback){
    return callback()
}

function returnsAnAnonymousFunction(){
    return function(){

    }
    
}
function returnsANamedFunction(){
    return function colorfulArts(){
        return 'Pink\'s songs rock!'
    }
}