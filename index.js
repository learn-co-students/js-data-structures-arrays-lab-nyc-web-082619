// Write your solution here!
let drivers = ["Milo", "Otis","Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
    drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift(name)
}

function appendDriver(name){
    const driver = name
    return [...drivers, driver]
  }
  
  function prependDriver(name){
    const driver = name
    return [driver, ...drivers]
  }
  
  function removeLastDriver(){
  
    return drivers.slice(0,2)
  }
  function removeFirstDriver(){
  
    return drivers.slice(1,3)
  }