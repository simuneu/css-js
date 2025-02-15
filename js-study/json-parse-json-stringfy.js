const a='b';
const c=['d',true,1];
const e={g:'h'};
const i=[{j:'k'},{l:'m'}];
const n={o:{p:'q'}};

const a1='v';
a
// 'b'
a1
// 'v'
const c1=c.slice();//배열안에 원시값만 들어있음
const c2=[...c];
const e1={...e}//배열안에 원시값만 들어있음

const i1=JSON.parse(JSON.stringify(i[0]));
const n1=JSON.parse(JSON.stringify(n));