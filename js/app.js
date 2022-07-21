
Cookies.set(`click_count`, 0);

function countClicks(details){
    let clicked = Cookies.get(`click_count`)
    console.log(`click_count`);
    // Cookies.set(`click_count`, 0)++;

}

let clicked = document.getElementById(`clickButton`);
clicked.addEventListener (`click`, countClicks);