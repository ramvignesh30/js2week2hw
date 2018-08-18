// Question
/*var addSix, createBase; 

function createBase(num){
   return num = 6
}

console.log(createBase())

addSix(10); // returns 16
console.log(addSix())
addSix(21); // returns 27

function addSix(n) {
    function createBase(num){
        return n+num
    }
}*/

var addSix = createBase(6);


function createBase(num){
    return function addSix(added){
      return num + added
    }
}


addSix(10); // returns 16
addSix(21); // returns 27


 console.log(addSix)