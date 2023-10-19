const dDay = new Date("2024-02-21");
const cDay = new Date();

const toNow = cDay.getTime();
const toDay = dDay.getTime();
const remainTime = toDay-toNow;

const calcDay = Math.round(remainTime/(1000*60*60*24));
console.log(calcDay);
document.querySelector('#result').innerHTML = calcDay;