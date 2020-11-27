function debug(name){
    return function(str){
        console.log(`Hi! [${name}] ${str}`);
    }
}

const log = debug('Mouse');
log('Error happend');