let result = document.querySelector(".result");
const button = document.querySelector(".btn").addEventListener("click", clickEvent);

function clickEvent() {
    var num = Math.floor(Math.random() * 7);
    console.log(num);
    switch (num) {
        case 1:
            result.innerHTML = "大吉";
            break;
        case 2:
            result.innerHTML = "中吉";
            break;
        case 3:
            result.innerHTML = "末吉";
            break;
        case 4:
            result.innerHTML = "吉";
            break;
        case 5:
            result.innerHTML = "凶";
            break;
        case 6:
            result.innerHTML = "大凶";
            break;
    }
}