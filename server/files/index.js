const fs = require('fs');

fs.readFile('./files/lorem.txt', (err, data)=>{
    if(err) throw err;
    console.log(data.toString());
})

