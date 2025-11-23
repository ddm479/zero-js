// 1분퀴즈

const obj = {
    a: 'hello',
    b: {
        c: "hi",
        d: { e: 'wow' },
    },
};

const { a, b: { c, d: { e } } } = obj;

// 아래와 같다
// const a = obj.a;
// const c = obj.b.c;
// const e = obj.b.d.e;

// const { a , b } = obj;
// const { d: { e } } = b;