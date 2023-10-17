// 시간정보(시간과 분)를 입력받아 45분 일찍 설정하는 문제
// 시간 출력구문 -> 템플릿 문자열을 사용해서 출력하기 '${}'

// <참고문법> 
// parsInt()함수 필요: 데이터 타입이 없기 때문에 몫 구할 때 정수로 바꿔주기 위해

// 1. prompt 사용해 시간, 분 입력받기
// 2. 입력받은 시간을 분으로 환산, 45분 빼기
// 3. 만약 45분 뺀 시간이 이전 날짜로 되는 경우는 24시간만큼 더하기
// 4. 계산된 분은 다시 시간과 분으로 환산해서 document.write()로 출력 -> 템플릿 문자열 사용 

// // 방법1 - 오류수정
// let tmp, hour, min, calc;
// tmp = prompt("시간 입력 : ", "");
// hour = Number(tmp);
// tmp = prompt("분 입력 : ", "");
// min = Number(tmp);

// //
// calc = (hour * 60) + min;
// console.log(calc);
// if(calc < 45) {
//     calc = (24 * 60) + min;
// }
// calc -= 45;
// console.log(calc);
// hour = calc % 60;
// document.write("<h2>" + `${hour}시 ${min}분`+ "</h2>");



// 방법2
let hour = Number(prompt("시간입력: ", ""));
let min = Number(prompt("분 입력 : ", ""));
let calc = (hour * 60) + min;
if(calc < 45) calc = (24*60) + min;
calc -= 45;
hour = parseInt(calc / 60);
min = calc % 60;
document.write(`<h2> 알람설정시간은 ${hour} 시 ${min} 분 입니다.</h2>`);