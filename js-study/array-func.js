rows=[];
rows.flat(); //n차원 배열을 1차원처럼 핌
rows.flat().every((td)=>td.textContent) 
//td.textContent가 모두 존재해야 true
//하나라도 존재하지 않으면 false
//그것이 every

Array.from(); //유사배열도 출력해줌

//some: 하나라도 true면 true 하나라도 false면 false
// const some= Array.some((value)=> value===null) 한칸이라도 null이면 true