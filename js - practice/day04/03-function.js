function a() {
}//함수선언문

const b = function( ){
}//함수표현식

const c = () =>{
}//화살표 함수


//function() {}//익명함수, 다른 곳에서 사용할 수 없음

function abc() {
    return '반환값';
}
console.log(abc()) //반환값

function abc2() {
    return '반환값';
    console.log('abc2함수');
}
console.log(abc2()) //반환값(return출력), console.log안 찍힘, return에서 종료

function arr() {
    return [1,5];
}
arr() //[1,5] 여러 값 return가능