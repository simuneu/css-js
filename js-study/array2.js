const array =[] //배열 생성

for(let i=0; i<5; i++) { //행 생성 길이5
    const cells=[]; //행을 나타내는 배열 생성
    for(let j=0; j<4; j++) { //열 생성 길이4
        cells.push(1) //값을 1로 넣어주기
    }
    array.push(cells) //배열에 넣기
}
// 5

// 0 (4) [1, 1, 1, 1]
// 1 (4) [1, 1, 1, 1]
// 2 (4) [1, 1, 1, 1]
// 3 (4) [1, 1, 1, 1]
// 4 (5) [1, 1, 1, 1]

const obj =[a,b];

const {a,b}=obj

// const obj.a;
// const obj.b;

const arr=[1,2,5];
const [one, two, three]=arr
// const one=arr[0]
// const two=arr[1]
// const three=arr[2]
