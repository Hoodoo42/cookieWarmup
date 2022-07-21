
Cookies.set(`clickCount`, 0);

function countClicks(details){
    let clicked = Cookies.get(`clickCount`)
    console.log(`clickCount`);
    // Cookies.set(`click_count`, 0)++;

}

let clicked = document.getElementById(`clickButton`);
clicked.addEventListener (`click`, countClicks);