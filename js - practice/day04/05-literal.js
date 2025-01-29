// const name = '수지';
// const year = 1994;
// const month = 1;
// const date = 1;
// const gender ='F';

const suzy = {
    name:'suzy',
    year:1994,
    month:1,
    date:1,
    gender:'F',
    '2ac':'특수한 경우',
}

console.log(`${suzy.name}는 ${suzy.year}년생이다.`)
console.log( suzy['2ac']+"는 대괄호를 사용" )//''필수

//속성 제거
delete suzy['2ac']
//속성 추가
suzy.new='새로운 속성 추가'

const debug ={
    log:function(value){
        console.log(value)
    }
}
debug.log("객체 안에 함수를 넣은 것을 메서드라고 부름")