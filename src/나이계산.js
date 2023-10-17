const currentYear = 2023;
let birthYear;
let age;

// "" 뒤의 것은 디폴트 값
birthYear= prompt("태어난 연도 입력 : (YYYY)", "");
age = currentYear - birthYear + 1;
// 웹화면 document
document.write(currentYear + "년 현재<br>" );
document.write(birthYearYear + "년에 태어난 사람의 나이는" + age + "세 입니다." );
