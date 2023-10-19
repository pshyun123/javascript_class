const seed = prompt("전체 응모자 수 : ", "");
const picked = Math.floor(Math.random() * seed +1);

document.write(`<h3>전체 응모자 수 : ${seed} 명</h3>`);
document.write(`<h1>당첨자 :  ${picked} 번</h1>`);
