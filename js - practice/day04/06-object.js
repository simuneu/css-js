//객체끼리의 비교
//{}==={} 
//false
//객체, 배열, 함수끼리 비교하면 false가 나옴
//true가 나오기 위해서는 변수 안에 넣고 비교해야 함

const a ={name:'suzy'}
const b = [1,2,3,'suzy',a]
console.log(a === b[4])
//true