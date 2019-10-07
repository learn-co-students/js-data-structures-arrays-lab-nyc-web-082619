// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();    
}

function appendDriver(name){
    const arr = [...drivers, name];
    return arr
}

function prependDriver(name){
    const arr = [name, ...drivers];
    return arr
}

function removeLastDriver(){
   const arr = drivers.slice(0, -1);
   return arr
}

function removeLastDriver(){
    const arr = drivers.slice(0, -1);
    return arr
 }

 function removeFirstDriver(){
    const arr = drivers.slice(1);
    return arr
 }