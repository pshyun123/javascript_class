// 함수선언문 :function 키워드로 선언,  호이스팅에 영향을 받음, 호출해야 실행됨
// let test = 10000;
// console.log(sum(10,20));
// console.log(sum(100,200));

// function sum(p1, p2){
//     return test + p1 + p2;
// }
// 이렇게 쓰지 말것. 원칙에 맞지 않음. 동일한 결과값이 나오지 않음 
// 원래 전역변수 써도 되는데 결과 값에 영향을 주면 안됨

// 함수표현식 변수에 함수를 할당해서 사용하는 방식, 호이스팅 적용 X, 네이밍함수/익명함수
// const gugudan = function() {
//     for(let i = 1; i < 10; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }
// gugudan();

// const gugudan = function(dan) {
//     for(let i = 1; i < 10; i++){
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }
// gugudan(5);
// 함수도 변수에 대입이 가능

// 화살표 함수: ES6에서 추가된 새로운 함수 선언 방법. 함수 선언식보다 간결, 가독성이 좋음.
// const gugudan = (dan) => {
//     for(let i = 1; i < 10; i++){
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }
// gugudan(5);

// 익명의 함수 sum을 
// const sum = (num1, num2) => {
//     console.log(num1, num2);
//     return num1 + num2;
// }
// // sum(10,20);
// sum(10);

// const sum2 = (num1, num2 = 100) => {
//     console.log(num1, num2);
//     return num1 + num2;
// }
// // sum(10,20);
// console.log(sum(10));

// 이것도 가능
// const sum = (num1, num2 = 100) => num1 + num2;
// console.log(sum(10));

// 스코프: 변수가 생성되고 소멸되는 영역, 영향을 미치는 범위
// let a = 10; // 전역스코프
// function sum() {
//     console.log(`함수 내부 : ${a}`);
// }
// sum();
// console.log(`함수 외부 : ${a}`);

// // 전역스코프 보다는 매개변수를 사용해서 하는게 더 좋다

// function sum() {
//     let a = 10;// 지역스코프이자 블록스코프
//     console.log(`함수 내부 : ${a}`);
// }
// sum();
// console.log(`함수 외부 : ${a}`);
// {} 중괄호 안이 스코프 영역, {}외부에서는 소멸된 a 값을 알 수 없음.


//실행은 가능 : var을 사용하면 지역변수의 범위를 벗어나도 무시하고 적용함 
// var a =10;
// {
//     var b = 20;
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 내부 a : ${a}`);
// console.log(`코드 블록 내부 b : ${b}`);

// // 불가능 : 지역변수가 범위를 벗어나면 사라짐
// let a =10;
// {
//     let b = 20;
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 내부 a : ${a}`);
// console.log(`코드 블록 내부 b : ${b}`);

// 참조 우선순위
// 전역변수가 있어도 지역변수에 값이 있으면 지역변수가 우선!!
// let a = 10
// const b = 20;
// function sum(){
//     let a = 50;
//     const b = 70;
//     console.log(`함수내부 a : ${a}`);
//     console.log(`함수내부 a : ${b}`);
// }
// sum();
// // 

// let a1 = 10
// let b1 = 20;
// {
//     let a = 50;
//     let b = 70;
//     console.log(`함수내부 a : ${a1}`);
//     console.log(`함수내부 a : ${b1}`);
// }
// sum();

// 즉시 실행 함수 : 함수를 정의하자마자 바로 실행되는 함수
// (function() {
//     init();
// })();
// function init() {
//     console.log("초기화 루틴을 수행합니다. ");
//     let defaultUrl = "127.0.0.1";
//     let defaultPort = "3030";
    
//     for(let i = 0; i< 100; i++){
//         console.log(i);
//     }
// }

// 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할 수 있는 메커니즘
function makeCounter(){
    let count = 100;
    return function(){
        count++;
        console.log(count);
    };
}

const counter = makeCounter();
counter();
counter();
counter();
