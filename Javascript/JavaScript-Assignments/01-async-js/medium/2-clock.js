// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const Clock = () => {
    
    console.clear();
    
    const now = new Date();

    let min = String(now.getMinutes());
    let sec = String(now.getSeconds());
    let Hour = String(now.getHours());

    console.log(Hour + ":" + min + ":" + sec);

    console.log("Current Time Format of my Machine: ")
    console.log(now.toLocaleTimeString());

}

setInterval(Clock, 1000);