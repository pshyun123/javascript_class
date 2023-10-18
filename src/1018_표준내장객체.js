// 표준내장객체는 자바스크립트에 개발 편의를 위해 미리 만들어 둔 객체.
// 문자열 다루는 String 객체
// length : 문자열 길이를 반환(메서드가 아님. 속성으로 존재)
const pw = "1234";
if(pw.length < 6) {
    console.log("비밀번호는 최소 6자리 이상 입력해 주세요.");
    console.log(`입력받은 비밀번호 길이는 ${pw.length}`);
}else{
    console.log("비밀번호 길이가 적절합니다.");
}

// 특정문자열 포함 여부만 확인
const email = "test!naver.com";
if(email.includes("@") === false){
    console.log("올바른 메일 형식이 아닙니다");
}
// 대상문자열과 일치하는 첫번째 문자(시작위치)의 인덱스 반환, 찾지 못하면 -1 반환
const email2 = "test!naver.com";
if(email2.includes("@") === -1){//0보다 하나더 작은 값으로 시작해야해서 -1
    console.log("올바른 메일 형식이 아닙니다");
}

// lastIndexOf : 찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index를 반환
const email3 = "test!n!av!er.com";
if(email2.indexOf("!") !== -1){
    console.log(email3.lastIndexOf("!"));
}

// slice() : 시작 위치와 종료 위치 주어지면, 문자열에서 해당 부분을 잘라내 반환 
const str = "Apple, Banana, Kiwi";
const rst = str.slice(7,13);
console.log(rst);

// concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수. 기존 문자열을 변경하지 않음
const text1 = "Hello";
const text2 = "World";
const text3 = text1.concat(" " + text2);
console.log(text3);


// padStart(), padEnd()
let str20 = "5";
str20 = str20.padEnd(4,0); // 5000
console.log(str20);

// charCodeAt()
let str40 = "HELLO WORLD";
console.log(str.charCodeAt(0));

// split()
let birthday = "1997-06-12";
let arr2 = birthday.split("-"); // 하이픈(-)을 기준으로 문자열을 분리해서 배열로 
console.log(arr2); // ["1997","06","02"]


// Number 객체
// Number.parseFloat() 메소드

console.log(Number.parseFloat("12"));         // 12
console.log(Number.parseFloat("12.34"));      // 12.34
// -- 여기부턴 자바에서 오류나는 부분 --
console.log(Number.parseFloat("12문자열"));   // 12
console.log(Number.parseFloat("12 34 56"));   // 12
console.log(Number.parseFloat("문자열 56")); // NaN


console.log(Number.parseInt("12"));         // 12
console.log(Number.parseInt("12.34"));      // 12
console.log(Number.parseInt("12문자열"));   // 12
console.log(Number.parseInt("12 34 56"));   // 12
console.log(Number.parseInt("문자열 56"));  // NaN


