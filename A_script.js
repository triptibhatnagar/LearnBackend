// alert("Hey")

// Fundamentals of JS :-
// 1. arrays nd objects
// 2. functions return
// 3. async js coding

// ARRAYS
// []
// var arr = [1,2,3,"4", {}, true, [], function() {}]
var arr = [1,2,3,4]
console.log(typeof arr); //object

// foreach, map, filter, find, indexOf

// FOREACH
// for each takes each val, do some operation on each val of arr
// undefined return type
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
    return 12 // return to that blank space, created in new arr
})
console.log(ans)

// FILTER
// -> filter the arr val on a specific condition
// used to create new arr where size of new arr can be equal or less than given arr
// return true or false
var ans = arr.filter((val) => {
    return val>=2
})
// jin cases k liye ye condition true hogi, vhi value new arr m jaygi
console.log(ans)

// FIND
// find something in arr
// give first occ
var ans  = arr.find((val) => {
    val == 12;
})
console.log(ans)

// INDEXOF
console.log(arr.indexOf(12)) //-1
console.log(arr.indexOf(1))


// OBJECTS 
// {}
// {key: value}

var obj = {
    name: "abc",
    age: 12
}
// FRREZE
Object.freeze(obj) // to not change the obj values

// DOT NOTATION, SQUARE NOTATION - to access values
console.log(obj.name)
console.log(obj["name"])
obj.age = 89
console.log(obj)

// FUNCTION {}
function abcd() {

}
function abcd2(a,b,c) {

}
// FUNCTION LENGTH = no of parameters because function is an object, so it has a property of length
console.log(abcd.length) //0
console.log(abcd2.length) //3

// RETURN - move the control of program
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
    // console.log("BLOB DATA: ",blob)
    var ans = await blob.json()
    console.log("JSON DATA: ",ans)
    console.log(ans.results[0].name)
}
// here, blob is actually a Response object returned by the fetch() API.
// fetch() returns a Promise that resolves to a Response object.
// fetch() is used to make HTTP requests.
// It returns a Promise that resolves to a Response object, which represents the entire HTTP response (including headers, status, and body).

// The Response object is just a wrapper around the HTTP response.
// The body inside it is not directly usable.
// .json() is used to parse and extract JSON data into a JS object you can work with.


abcd()
// fetch is asynchronous by nature and non blocking

// async function abcd() {
//      await
// }
