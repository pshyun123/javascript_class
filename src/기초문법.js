// 한줄 주석
/*

여러줄 주석

*/
// 변수와 주석 : var, let const
// var: es6 이전에 사용하던 변수 생성 문법 (호이스팅 특징 가지고 있음), 중복선언 가능, 재할당 가능, 절대 쓰지 말자
// let : 변수 선언 문법, 자바와 동일, 중복선언 불가, 재할당 가능, es6에서 추가
// const: 상수선언, 재할당 불가, es6에서 추가

// 자바스크립트가 해석하기 편하도록 끌어올림 : 호이스팅, 
// console.log(a);
// console.log(100);
// var a = 100;

// // 위에처럼 적었지만 아래처럼 작동함
// var a;
// console.log(a);
// console.log(100);
// a = 100;

// // 이것도 된다. 자바에서는 안됨
// var a = 100;
// var a = 200;
// console.log(a);
// console.log(100);

// // let은 이런식으로 하면 오류
// console.log(a);
// let a = 100;

// // 이건 가능
// let a = 100;
// a=200;
// console.log(a);

// // 불가
// const a = 100;
// a = 200;
// console.log(a)

// // 일반적으로 함수는 호이스팅이 일어남, c언어는 아님
// console.log(sum(10,20));

// function sum (x,y) {
//     return x + y;
// }

// 문자열 문자열과 문자를 동일하게 사용
// let str = "문자열" + '연결연산자 사용' + `이것도 가능`;
// console.log(str);

// let name = "제 이름은 '곰돌이 사육사'입니다";
// console.log(name);

// 템플릿 문자열 : 백틱(``)으로 문자열을 정의하는 방법.(ES6에서 추가됨) 
// let name = "곰돌이 사육사";
// let age = 23;
// let addr = "주소"

// console.log(`저의 이름은 ${name}, 나이는 ${age}, 주소는 ${addr}`);

// // 숫자형( Number ) : 자바스크립트는 정수,실수 구분x, 숫자형으로 취급
// let num1 = 10.1;
// console.log(typeof(num1)) // typeof는 데이터 타입을 확인하는 함수

// let sum = 0.1 + 0.2;
// console.log(sum);

//논리형 : 참, 거짓 구분

// let age = 20;
// let isAdult = (age > 18) ? true : false;
// if(isAdult) console.log("성인입니다.");
// else console.log("성인이 아닙니다.");

// undifined : 변수는 선언되었지만 아직 값이 정해지지 않았음을 의미(개발자가 대입하는 자료형이 아님)
// let empty = undefined;
// console.log(empty);

// null: 변수나 상수 선언 후 의도적으로 선언한 공간 비워둘때 사용
// let empty2 = null;
// console.log(empty2);
// 두개 차이 -> 의도 가지느냐 안 가지느냐
// undefined와 null을 묶어서 -> 특수 자료형



// 객체 : 자바스크립트의 핵심적인 자료형
// : 기본 자료형을 제외하고 자바스크립트의 거의 모든 데이터와 자료구조는 객체
// ⇒ 배열, 객체 리터럴, 함수

// 배열
// let score = [80, 99, 77, 65];
// console.log(score[1]);

// let array = ["ive", "안유진", 20, true, [100,99,88]];
// console.log(array);

// let array = [];

// 객체리터럴 :: 객체를 정의하는 가장 간단한 방법
// : 자바스크립트에서 가장 많이 사용됨
// : 객체를 정의할 때 중괄호{}, 중괄호 안에는 키와 값의 한쌍으로 구성

let score = {
    kor : 80,
    eng : 90,
    mat : 100,
    scn : 87
};
console.log(score.kor);
console.log(score['mat']);

const person = {
    name : "곰돌이 사육사",
    age : 22,
    addr : "수원시",
    info : function(){
        return `저의 이름은 ${this.name}이고, 나이는${this.age}, 주소는 ${this.addr}입니다.`;
        // 자기 참조
    }
}
console.log(person.info());

// toString: 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());