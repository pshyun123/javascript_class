// Array 객체 : 배열에서 사용할 수 있는 많은 속성과 메서드가 정의되어 있음
const arr = [10, 20, 30, 40, 50];
arr.forEach(e => {
    console.log(e * e);
}); //e라는 매개변수가 key가 되어서 arr 자동순회하며 e 값을 함수내부로 던짐. 

// toString(): 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango

// join(): 배열 안의 모든 문자를 지정한 문자를 이용해 연결
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * ")); // Banana * Orange * Apple * Mango

// pop() : 스택 자료구조의 특성, 배열 마지막 데이터를 제거하고, 반환
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.pop()); //  "Mango"
// push() : 배열에 새로운 요소(데이터, 객체 등)를 추가
fruits3.push("kiwi");
console.log(fruits3.toString());
// shift() : 첫 번째 요소를 제거하고, 첫 번째 요소를 반환
fruits3.shift();
console.log(fruits3.toString());
// unshift() : 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
fruits3.unshift("Lemon");
console.log(fruits3.toString());
// 배열의 요소변경
fruits3[0] = "Banana";
console.log(fruits3.toString());


// concat() : 2개 이상의 배열을 하나의 배열로 결합.
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);


// slice(): 2개의 파라미터를 사용해 배열의 요소를 잘라냄(비파괴적 메소드)
let fruits10 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits10.slice(3); // [Apple, Mango]
let citrus2 = fruits10.slice(1,3); // [Orange, Lemon]
console.log(citrus);
console.log(citrus2);

// sort() 함수는 배열에 문자형 데이터가 있는 경우 오름차순으로 정렬합니다.
let fruits20 = ["Banana", "Orange", "Apple", "Mango"];
fruits20.sort(); 
console.log(fruits20);
fruits20.reverse();
console.log(fruits20);

// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만 찾아서 새로운 배열 반환
let persons = [
    {
      name: "유재석",
      point: 78,
      city: "서울",
    },
    {
      name: "김종국",
      point: 92,
      city: "서울",
    },
    {
      name: "양세찬",
      point: 76,
      city: "제주",
    },
    {
      name: "하하",
      point: 81,
      city: "서울",
    },
  ];

const pass = persons.filter(person => person.point > 80);
console.log(pass);

const local = persons.filter(person => person.city === "제주");
console.log(local);