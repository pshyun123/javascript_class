// 비교 연산자
// 동등 연산자
// 넘버와 문자 연산자의 1이 같다?
console.log(1 == "1");
console.log(1 == true);
console.log(0 == false);

// 부등연산자
console.log(1 != "1");
console.log(1 != true);
console.log(1 != false);

// 일치 연산자(===) 
console.log(1 === "1");
console.log(1 === true);
console.log(0 === false);
console.log(1 !== "1");
console.log(1 !== true);
console.log(1 !== false);

// 형변환 : 묵시정, 명시적 형변환
let num1 = 10 + Number('10');
console.log(num1);

// 반복문 : 자바스크립트에서는 while, do-while, for, for-in, for-of
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for(let i = 0; i < brands.length; i++){
    console.log(brands[i]);
}

// 구입가능한 음료리스트 구하기
// 배열안에 객체를 넣을 수 있다.
let productList = [
{
    name: "레쓰비",
    price: 700
},
{
    name: "티오피",
    price: 1000
},
{
    name: "비타500",
    price: 800
},
{
    name: "포카리스웨트",
    price: 2500
},
{
    name: "파워에이드",
    price: 2000
},
    
];
let inputCoin = 800;
let outputList = []; // 빈 배열 생성
for(let i = 0; i < productList.length; i++){
    if(productList[i].price <= inputCoin){
        outputList.push(productList[i]); // 배열의 마지막에 새로운 요소 추가
    }
}
console.log(outputList);


// for-in : 객체의 프로퍼티를 열거하는 데 사용
let person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

for (let key in person){
    console.log(person[key]);// key 값 이용해 해당하는 값 출력 
}

// for of
let brand = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for(let e of brand){
    console.log(e);
}