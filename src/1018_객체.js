// 객체 : 원시타입(변수의 값이 바로 포함되는 것)을 제외한 모든 값
// 객체 리터럴(Object Literal)을 사용하여 생성, 속성(property)과 값(value)의 쌍으로 구성
// 자바스크립트에서 객체를 만드는 방법은 → 객체 리터럴을 사용하는 방법 / 클래스 사용하는 방법(안씀)
// 객체 리터럴로 객체를 만드는 것이 간단하고 직관적임

const person = {
    title: "지구오락실",
    name: "안유진",
    age : 21,
    job: "아이돌"
};

console.log(person);

const person2 = {
    name: {
        firstName: "유진",
        lastName : "안"
    },
    age : 20,
    isAdualt : true,
    info: function(){
        return `이름 : ${this.name.lastName}${this.name.firstName},
        나이 : ${this.age}`;
    }
};
console.log(person2.info());
console.log(person2[`name`]);
console.log(person2[`isAdualt`]);

// 객체 속성 변경 / const인데 오류 안나는 이유 -> 주소가 바뀌지 않고 값만 바꿈
person2.name.firstName ="Youjun";
person2.name.lastName ="An";
console.log(person2.info());

// 객체 속성 동적으로 추가
const carInfo = {};
carInfo.name = "제네시스 쿠페";
carInfo.year = "";
carInfo.maxSpeed = "235km";
console.log(carInfo);

// 객체 속성 동적 삭제(실행중에 바뀌기 때문에 '동적')
delete carInfo.year;
console.log(carInfo);


// 객체 메소드 : 객체 내부에서 동작하는 함수,즉, 프로퍼티에 저장된 값의 타입이 함수를 의미함
let person3 = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  person3.sayHello(); // 출력: 'Hello, my name is John.'


  //====생성자=====
// 생성자로 객체 생성 : 함수이름이지만 객체생성을 위해 첫글자가 대문자임
function Person(name, age, addr, job){
    this.name = name;
    this.age = age;
    this.addr = addr;
    this.job = job;
  }
const person11 = new Person("안유진", 21, "서울시 강남구 역삼동", "아이돌");
const person22 = new Person("장원영", 20, "서울시 강남구 청담동", "아이돌");
console.log(person11);
console.log(person22);