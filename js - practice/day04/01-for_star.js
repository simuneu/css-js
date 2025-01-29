for(let i = 2; i<10; i++){
    for(let j= 1; j<10; j++){
        console.log(i+"X"+j+"="+i*j)
    }
}

for(let i = 2; i<10; i++){
    if(i%2===0)continue
    for(let j= 1; j<10; j++){
        if(j%2===0)continue
        console.log(i+"X"+j+"="+i*j)
    }
}

//왼쪽 정렬
for(let i=0; i<=5; i++){
    console.log("*".repeat(i))
}

//오른쪽 정렬
for(let i=1; i<5; i++){
    console.log(" ".repeat(5-i)+"*".repeat(i))
}

//역순
for(let i=5; i>=0; i--){
    console.log("*".repeat(i))
}


//가운데 정렬(트리)
for(let i=1; i<=5; i++){
    console.log(" ".repeat(5-i)+"*".repeat(2*i-1))
}

//마름모
for(let i=1; i<=3; i++){
    console.log(" ".repeat(3-i)+"*".repeat(2*i-1))
}
for(let j=3-1; j<=3; j--){
    console.log(" ".repeat(3-j)+"*".repeat(2*j-1))
}