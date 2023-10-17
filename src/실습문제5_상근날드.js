// 3개의 햄버거와 2개의 음료의 가격을 입력 받아 제일 싼 세트 메뉴의 가격 구하기(50원 할인)
// - prompt로 연속해서 햄버거 3개 가격과 음료 2개의 가격을 입력 받음
// - 햄버거 3개 중 가장 싼 가격을 선택하고 음료둘 중 싼 음료의 가격을 합산하고 여기서 50원 할인
// - 결과를 웹화면에 예쁘게 출력


let menu = [];
menu[0]= Number(prompt("상덕버거 가격 입력 : ", ""));
menu[0]= Number(prompt("중덕버거 가격 입력 : ", ""));
menu[0]= Number(prompt("하덕버거 가격 입력 : ", ""));
menu[0]= Number(prompt("콜라 가격 입력 : ", ""));
menu[0]= Number(prompt("사이다 가격 입력 : ", ""));

let minB = menu[0];
let minD = menu[3];
for(let i = 0; i < menu.length; i++) {
    if(i < 3 && minB > menu[i]) minB = menu[i];
    if(i > 2 && minD > menu[i]) minD = menu[i];
};
// 돔트리를 따라다니는 방법-> getElementById 
// innerHTML,  innerText 똑같다 여기에선..

document.getElementById("value").innerText = (minD + minB -50) + "원";
