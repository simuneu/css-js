const fruit = ['사과','감','오렌지','딸기'];
console.log(fruit[0]); //사과
console.log(fruit[1]); //감
console.log(fruit[2]); //오렌지
console.log(fruit[3]); //딸기

//배열 안 배열
const arrayOfArray=[[1,2,3],[4,5]]
arrayOfArray[0] //[1,2,3]
arrayOfArray[1] //[4,5]
console.log(arrayOfArray[0]);
console.log(arrayOfArray[1]);

//변수가 들어갈 수도 있음
const a = 1;
const b = 2;
const newArray=[a,b,30];
console.log(newArray[0]);
console.log(newArray[1]);
console.log(newArray[2]);

//요소 개수 구하기 
newArray.length

//마지막 요소 구하기 
console.log(newArray[newArray.length-1]); //마지막요소 구하는 법 : 길이-1로 인덱스  

//마지막으로 배열에 요소 추가
//1
newArray[newArray.length]=40;
console.log(newArray);
//2
newArray.push(400);
console.log(newArray);

//맨 앞에 추가
newArray.unshift(500);
