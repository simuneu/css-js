function a(parameter){
    console.log('argument');
}

console.log(a());

function b(w,x,y,z){
    console.log(w,x,y,z);
    console.log('argument');
}

a('hello','parameter','argument'); //'hello','parameter','argument',undefined

function add(x,y){
    return(x+y);
}
add(5,3) //8

const multiply=(x,y,z)=> {
    return(x*y*z);
}
console.log(multiply(3,4,6));

const multiply2=(x,y,z)=> x*y*z;//{return}이렇게 이어져 있으면 생략가능

