
// 버튼이 눌려지면 이부분이 호출됨
function getPrice() {
    let menu = []; // 빈 배열 생성
// i 넘버로 넘겨받는데 input id의 이름을 입력해줌
// 필드에서 입력된 값이 value가 됨.
    for(let i = 0; i < 5; i++) {
        menu[i] = Number(document.getElementById("menu" + (i+1)).value);
        // console.log(menu[i]);
    }

    let minB = menu[0];
    let minD = menu[3];
    for(let i = 0; i < menu.length; i++) {
        if(i < 3 && minB > menu[i]) minB = menu[i];
        if(i > 2 && minD > menu[i]) minD = menu[i];
    }
    document.getElementById("value").innerHTML = (minB + minD - 50) + "원";
}