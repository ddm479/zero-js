// 10-3_ 1분퀴즈
// 복사하기, 복사본을 수정해도 원본이 바뀌지 않게하기


const a = 'b';
const a1 = a;

// 객체안에 원시값만 있을 때 복사하려면 얕은 복사로
const c = ['d', ture, 1];
const c1 = [...c]; // c.slice()도 가능

const e = { g: 'h' };
const e1 = { ...e };

// 객체안에 중첩된 객체가 있을 때 복사하려면 깊은 복사로
const i = [{ j: 'k' }, { l: 'm' }];
const i1 = JSON.parse(JSON.stringify(i));

const n = { o: { p: 'q' } };
const n1 = JSON.parse(JSON.stringify(n));


