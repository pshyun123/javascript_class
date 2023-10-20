// 정규표현식을 사용하여 문자열 검색, 대체, 추출 등을 수행
// exec():패턴과 일치하는 문자열을 반환,  없으면 null


let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
const pattern = /가장+/;
const pattern2 =/가장큰+/g; // 없는 문자 찾게하려고 // g 는 여러개중에 찾으려고
const result1= pattern.exec(targetStr);
// console.log(result1);
const result2= pattern.exec(targetStr);
console.log(result2);

// test() : 문자열에 특정 패턴과 일치하는 문자열이 있는지 검색, 있으면 true, 아니면 false/

//전화번호 패턴
let phoneNumber = "010-7177-0703";
const regex = /\d{3}-\d{4}-\d{4}/g;//g는 다 찾아준다
let rst1 = regex.test(phoneNumber);
    console.log(rst);
