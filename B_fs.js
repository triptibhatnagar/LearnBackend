const fs = require('fs')
// 'fs' ki power nikl k fs variable m aa gyi, jise hm ab use kr skte h

// write file
// append file
// copy file
// rename
// unlink

// write file
// (path, data, callback)
// here callback contains paramter err
fs.writeFile('hey.txt', "Hello world", function(err) {
    if(err) console.error(err);
    else console.log("written")
})

// append file
// (path, data, callback)
// fs.appendFile('hey.txt', "Kya bhai kya append krna h", function(err) {
//     if(err) console.error(err);
//     else console.log("appended")
// })

// rename
// (old name, new name, callback)
// fs.rename("hey.txt", "hello.txt", function(err) {
//     if(err) console.error(err)
//     else console.log("renamed")
// })

// copy file
// (src, dest, callback)
// fs.copyFile("hello.txt", './copy/copy.txt', function(err) {
//     if(err) console.error(err.message)
//     else console.log("copied")
// })

// unlink - delete file
fs.unlink("hello.txt", function(err) {
    if(err) console.error(err)
    else console.log("deleted")
})

// rmdir - remove directory
// removes blank directory or folder
// fs.rmdir("./copy", function(err) {
//     if(err) console.log(err)
//     else console.log("done")
// })//Error: ENOTEMPTY: directory not empty

// to remove the nt blank folder : use recursive true
// fs.rmdir("./copy", {recursive: true} ,function(err) {
//     if(err) console.log(err)
//     else console.log("done")
// })

// DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead

// fs.rm("./copy", {recursive: true} ,function(err) {
//     if(err) console.log(err)
//     else console.log("done")
// })

// folder kese bnta h, folder/file ko read kese krte h
//  the data returned is a Buffer by default, not a string.
// fs.readFile("hey.txt", function(err, data) {
//     if(err) console.error(err)
//     else {
//         // console.log(data)
//         console.log(data.toString())
//         console.log("done")
//     }
// })

// to directly get a readable string, you can pass "utf8" - fs.readFile("file.txt", "utf8")

// HTTP MODULE