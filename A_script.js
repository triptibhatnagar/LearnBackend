// alert("Hey")

// Fundamentals of JS
// arrays nd objects
// functions return
// async js coding

// []
// var arr = [1,2,3,"4", {}, true, [], function() {}]
var arr = [1,2,3,4]

// foreach, map, indexOf find 

// FOREACH
// for each takes each val, do some operation on each val of arr
arr.forEach((val) => {
    // console.log(val)
    // val = val + 2
    console.log(val + "hello")
})

// MAP
// returns a new arr, whose no of elem are same as arr
// used to create new arr from a given arr
var ans = arr.map((val) => {
    // return val*2
    return 12
})
console.log(ans)

// FILTER
// -> filter the arr val on a specifuc condition
// used to create new arr where size of new arr can be equal or less than given arr
// return true or false
var ans = arr.filter((val) => {
    return val>=2
})
console.log(ans)

// FIND
// find something in arr
// give first occ
var ans  = arr.find((val) => {
    if (val == 12) {
        return val
    }
})
console.log(ans)

// INDEXOF
console.log(arr.indexOf(12))
console.log(arr.indexOf(1))


// OBJECTS 
// {}
// {key: value}

var obj = {
    name: "abc",
    age: 12
}
// FRREZE
Object.freeze(obj) // to not change the obj

// DOT NOTATION, SQUARE NOTATION
console.log(obj.name)
console.log(obj["name"])
obj.age = 89
console.log(obj)

// FUNCTION {}
function abcd() {

}
function abcd2(a,b,c) {

}
// FUNCTION LENGTH = no of parameters
console.log(abcd.length) //0
console.log(abcd2.length) //3
// function length = no of parameters because function is an object

// RETURN
function abcd() {
    return 12;
}
console.log(abcd())


// ASYNC JS CODING
// is async necessary for await
// var blob = await fetch(`https://randomuser.me/api`)
// var res = await blob.json()
// console.log(res)

// synchronous - line by line code will run
// asynchronous - jo b code async nature ka ho use side stack m bhej do and agle code ko chlao jo b sync nature ka ho, jb b sara sync code chl jaye ya main stack khali ho jaye, tb check kro ki async code complete hua ya nh, and agr wo complete hua ho use main stack m laao and chla do

async function abcd() {
    var blob = await fetch(`https://randomuser.me/api`)
    var ans = await blob.json()
    console.log(ans)
    console.log(ans.results[0].name)
}
abcd()
// fetch is asynchronous by nature and non blocking

// async function abcd() {
//      await
// }

/**
 * Node js basics
 * Introduction to Node js
 * Installing Node js and npm
 * Working with modules
 * 
 * File system operations
 * Understanding HTTP module
 */