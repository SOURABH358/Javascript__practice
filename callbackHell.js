const root = document.getElementById('root')

const getName = function(nextStep){
    const name = '<p>Joe Dallas<p>'
    
    nextStep(name);
}
const getAddress = function(value, nextStep){
    const address = '<p>Street Brabourn House - 3218</p>';
   
    nextStep(value + address);
}
const getPhone = function(value, nextStep){
    const phone = '<p>+91 838394xxxx</p>'
    
    nextStep(value +  phone)
}

const getProfession = function(value, nextStep){
    const profession = '<p>Software developer</p>';
    
    nextStep(value + profession)
}
// callback hell
const getPerson = lastStep =>{
    getName(function(name){
        getAddress(name, function(address){
            getPhone(address, function(phone){
                getProfession(phone, function(profession){
                    return lastStep(profession)
                })
            })
        })
    })
}
getPerson(function(value){
    console.log(value)
    root.innerHTML = value;
})

// to promises
/**
const getName = function(){
    const name = '<p>Joe Dallas<p>'
    return new Promise((resolve, reject)=>{
        resolve(name)
    })
}
const getAddress = function(value){
    const address = '<p>Street Brabourn House - 3218</p>';
    return new Promise((resolve, reject)=>{
        resolve(value + address)
    })
}
const getPhone = function(value){
    const phone = '<p>+91 838394xxxx</p>'
    return new Promise((resolve, reject)=>{
        resolve(value + phone)
    })
}

const getProfession = function(value){
    const profession = '<p>Software developer</p>';
    return new Promise((resolve, reject)=>{
        resolve(value + profession)
    })
}

function getPerson(){
    return getName()
    .then(getAddress)
    .then(getPhone)
    .then(getProfession)
}
getPerson()
.then(value => {
    console.log(value);
    root.innerHTML = value;
})

 */

