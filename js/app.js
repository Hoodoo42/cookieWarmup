// setting a cookie with a value of 0
Cookies.set(`clickCount`, 0);

// this function will create a variable that will get(cookies.get) the value of clickCount
// the parseInt is important, without it, cookies ONLY HOLD STRINGS and will keep adding the character `1` ie 1111111 (instead of 1+1 =2)
// next line will allow that value to plus one each time
// Cookies.set will reset the value for clickCount and hold the new value that currentCount will hold
function countClicks(details){
    let currentCount = parseInt(Cookies.get(`clickCount`));
    currentCount++;
    Cookies.set(`clickCount`, currentCount);
}
// creating an eventListener for when the targeted button is clicked it calls the above function
let clicked = document.getElementById(`clickButton`);
clicked.addEventListener (`click`, countClicks);