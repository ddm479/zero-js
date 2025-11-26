// 10-3_ 1분퀴즈
// 복사는 복사본을 수정해도 원본이 바뀌지 않는 것
// 참조는 값이 바뀌면 같이 바뀌는 것

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


// 원시값(문자열, 숫자 boolean 등)을 대입(=)하면 복사가 되고
// 객체를 그냥 대입(=)하면 참조가 된다.