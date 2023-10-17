
let isRed = false;
// 변수 let ,상수 const 구분
const head = document.querySelector("#head-line");
// document를 쿼리셀랙터로 추적해라, 헤드라인 변수 찾아서 대입
head.onclick = function(){
    head.style.color = "red";
    // 디버깅 성향, 확인하기 위한 용도
    console.log("현재컬러는 레드")
    // red가 아니면
    if(!isRed){
        head.style.color = "red";
    } else {
        head.style.color = "royalblue";
        console.log("현재컬러는 블루")
    }
    isred = !isRed;
}
