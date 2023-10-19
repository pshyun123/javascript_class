function newRegister() { // 클릭될때 
    let newItem = document.createElement("li"); // 요소 노드 추가
    let subject = document.querySelector("#subject"); // 폼의 텍스트 필드 
    newItem.innerHTML = subject.value; // 입력받은 값 가져오기

    let itemList = document.querySelector("#itemList"); // 웹 문서에서 부모 노드 가져오기
    // insertBefore() 특정위치 앞에 노드 삽입
    itemList.insertBefore(newItem, itemList.childNodes[0]); // 자식 노드 중 첫번째 노드 앞에 추가(노드,위치)

    subject.value = ""; // 문자 입력 후 초기화
    let items = document.querySelectorAll("li"); // 유사배열형태로 리스트가 모두 선택
    for (i = 0; i < items.length; i++) { 
        items[i].addEventListener("click", function() { // 클릭이 되면 원하는 callback 함수 불러줘
            // 화살표함수 사용하면 동작안됨. this가 바인딩이 안 일어난다.
            if(this.parentNode) { // 방어코드. 부모 노드가 있다면
                this.parentNode.removeChild(this); // 부모 노드기준으로(ul태그)에서 자신(현재 이벤트가 발생한애)을 삭제
            }
        });       
    }
}