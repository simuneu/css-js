[1,2,3,4].reduce((a,c)=>(a+c))
//a:누적값c:현재값

[1,2,3,4].reduce((a,c)=>(a+c),0)
// a :0 c:1 
// a :1 c:2 
// a :3 c:3 
// a :6 c:4 =10


[1,2,3,4].reduce((a,c)=>(a*c),1)
// a :1 c:1 
// a :1 c:2
// a :2 c:3 
// a :6 c:4 =24

['가','나','다','라'].reduce((a,c,i)=>{a[i]=c; return a},{});
//a:{} c:'가' i:0
//a:{0,가} c:'나' i:1
//a:{0,가,2,나} c:'다' i:2
//a:{0,가,2,나,3,다} c:'라' i:3
//a:{0,가,2,나,3,다,4,라}


//초기 값을 안 넣으면 첫 번째 값이 초기 값 