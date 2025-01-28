for(let i=0; i<10; i++){
    for(let j = 0; j<10; j++) {
        console.log(i,j)
    }
}

for(let i=2; i<10; i++){
    for(let j = 1; j<10; j++) {
        console.log(i+" X "+j+" = "+(i*j));
    }
}

for(let i = 0; i<5; i++){
    if(i%2===0) continue; //짝수면 건너뛰기
    for (let j=0;j<5; j++){
        if(j%2===0) continue; //짝수면 건너뛰기
        for(let k= 0; k<5; k++){
            if(k%2===0) continue; //짝수면 건너뛰기
            console.log(1, j, k)
        }
    }
}
// 1 1 1
// 1 1 3
// 1 3 1
// 1 3 3
// 1 1 1
// 1 1 3
// 1 3 1
// 1 3 3

for(let i=2; i<10; i++){
    if(i%2===0) continue;
    for(let j = 1; j<10; j++) {
        if(j%2===0) continue;
        console.log(i+" X "+j+" = "+(i*j));
    }
}

//늘어나는 별
for(let i=0; i<=5; i++){
    console.log('*'.repeat(i+1))
}

for(let i=0; i<=5; i++){
    if(i%2===0) continue
    console.log('*'.repeat(i))
}

//역순
for(let i=5; i>=0; i--){
    console.log('*'.repeat(i))
}

for(let i=5; i>=0; i--){
    if(i%2===0) continue
    console.log('*'.repeat(i))
}



//트리만들기
for(let i=1; i<=5; i++){
    console.log(' '.repeat(5-i)+'*'.repeat((2*i)-1))//별 개수를 홀수로 만들어야 함
}


//마름모만들기
for(let i=1; i<=3; i++){
    console.log(' '.repeat(3-i)+'*'.repeat((2*i)-1))
}
for(let i= 3-1; i>=1; i--){
    console.log(' '.repeat(3-i)+'*'.repeat((2*i)-1))
}
