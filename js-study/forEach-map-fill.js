const answer =[3,4,1,6];
const value='3416';
let strike =0;
answer.forEach((el,i)=>{
    const index = value.indexOf(el);
        if(index>-1) { //일치하는 숫자 발견
            if(index ===1) { //자릿수가 같음
                strike +=1;
            }else{ //숫자만 같음
                ball+=1;
            }
        }
})

//map - 배열에 2를 곱한 값으로로 추가
const array=[1,2,3,4];
const result=[];
for(let i=0; i<4; i++){
    result.push(array[i]*2);
}
array.map((el,i)=>{ //반복하며 값 변경(기존값은 변경되지 않음)
    return el*2;
})

//fill
Array(9);
Array(9).fill(); //undefined 9개로 채워짐
Array(9).fill(0); //0이 아홉개~
Array(9).fill(0).map((element,index)=>{ //매개변수
    return index+1;
    //return element+=1;
});