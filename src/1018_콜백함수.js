//  콜백(callback) : 함수의 인자로 다른 함수를 전달하여 그 함수가 실행될 때 호출되는 함수
// 콜백 함수는 비동기적인 작업을 처리할 때 많이 사용
// function cry() {
//     console.log("cry");
// }
// function sing() {
//     console.log("sing");
// }
// function dance() {
//     console.log("dance");
// }

// // 일반 함수로 호출 : 기분 좋을땐 sing 기분나쁠땐 cry 정해져있음,새롭게 등록 불가능
// function checkMood(mood){
//     if(mood === "good") sing();
//     else cry();
// }
// // checkMood("sad");

// // 콜백 함수 : 기분 좋고 나쁠때 불러주는 함수를 정해줄 수 있음, 내가 만든 함수
// function checkMoodCallback(mood, goodCall, badCall){
//     if(mood === "good") goodCall(); //기분이 좋을때 부르는 함수를 내가 정함
//     else badCall();
// }
// checkMoodCallback("good", dance, cry) //dance 가 불려와짐

// 타이머 설정과 Callback
function buy_Tobe(item, price, quantity, callback) {
    console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    console.log("계산이 필요합니다.");
    // 익명의 함수, 쓰고 버릴 것 / 첫매개변수는 {}안에, 
    setTimeout(function(){
        let total = price * quantity;
        callback(total);
        }, 2000);
    }
    function pay(n) {
        console.log("지불할 금액은 : " + n + "입니다.");
    }
    buy_Tobe("맥북에어(스타라이트)", 1300000, 2, pay);

    