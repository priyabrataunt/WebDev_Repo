// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs').promises;

async function savefile(){
    try{
        await fs.writeFile("pb.txt", "Hi I am pb. How are you doing??");

        console.log("File successfully created and written");

    }catch(err){
        console.error("error:", err);
    }
}

savefile();
console.log("This file will run first before actually creating the file.");