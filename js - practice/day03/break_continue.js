let i =0;
while(true){
    if(i===5) break;
    i++
}
console.log(i);
//5

let j =0;
while(true) {
    i++;
    if(1%2===0) { //짝수라면
        continue; //건너뛰기
    }
    console.log(i);
} 
