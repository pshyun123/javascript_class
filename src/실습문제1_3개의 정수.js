// 3개의 정수 입력받아 가장 큰수와 작은 수 구하기
// 입력은 prompt()
// prompt()로 입력받느 값은 문자열로 반환, Numver()로 형변환
//  화면 출력은 document.write() 사용, 출력문 내부에 html 사용 가능
let a,b,c, tmp;
let min, max;

tmp = prompt("첫번째 수 입력 : ", "");
a = Number(tmp);
tmp = prompt("두번째 수 입력 : ", "");
b = Number(tmp);
tmp = prompt("세번째 수 입력 : ", "");
c = Number(tmp);

if(a > b){
    if(a > c) max = a;
    else max = c;
}else{
    if(b > c) max = b;
    else max = c;
}

if(a > b){
    if(b > c) max = c;
    else min = b;
}else{
    if(a > c) max = c;
    else min = a;
}

document.write("<h3> 제일 큰 값 : " + max + "</h3>")
document.write("<h3> 제일 작은 값 : " + min + "</h3>")

