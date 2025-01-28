const array1=[1,2,3,4,5];

//배열에서 요소 제거하기
//마지막 요소 제거
array1.pop();
console.log(array1)

//첫번째 제거거
array1.shift();

//중간 값 제거거
array1.splice(1,1) //(지우고 싶은 요소 인덱스, 그로부터 몇개 지울지)

//중간값 수정
array1.splice(1,2,200,300)

//중간에 값 끼워 넣기
array1.splice(1,0,250)

//배열에서 요소찾기
array1.includes(250) //true 없으면 -1

array1.indexOf(250)//앞에서 인덱스 찾기
array1.lastIndexOf(250)//뒤에서 인덱스 찾기

