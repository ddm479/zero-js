// promise란, 실행은 바로하되 결괏값을 나중에 원할 때 쓸수 있는것을 말한다.

let a = 2;

const p = new Promise((resolve, reject) => {
    console.log("이부분(Executor 함수)도 동기에요");
    setTimeout(() => {
        a = 5;
        console.log(a);
        resolve(a);
    }, 0);
    console.log("프로미스의 Executor 함수가 먼저 실행된다.");
    console.log("호출이 따로 없어도 함수가 실행된다.");
});

// 딴짓딴짓
// 딴짓딴짓
// 딴짓딴짓
// 딴짓딴짓
// 딴짓딴짓
// 딴짓딴짓
// 딴짓딴짓
// 딴짓딴짓
// 딴짓딴짓
console.log("딴짓")


p.then((result) => {
    console.log('a를 받음', result);
    // 아래부터 2-5강좌
    return 1;
}).then((result) => {
    console.log(result); // 1
    // return 생략
}).then((result) => {
    console.log(result); // 앞에서 return 생략한다면 undefined
    return Promise.resolve(1);
}).then((result) => {
    console.log(result); // 1 
}).catch(() => {
    // 앞에 전체에 대해 오류찾음
}).then(() => {

}).catch(() => {
    // 앞에 catch 이후부터 오류찾음
}).then(() => {

}).catch(() => {

});

// async/await도 위에처럼 나눌수 있다
function delayP(ms) {
    // setTimeout을 프로미스로 만듦
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};

async function a() {
    const a = await 1; // a는 1
    const b = await Promise.resolve(1); // 1
    try {
        await delayP(1000);
    } catch (error) {
        // 에러 따로 처리가능
        console.error(error);
    }
    try {
        await delayP(1000);
        await delayP(1000);
        await delayP(1000);
        await delayP(1000);
        await delayP(1000);
    } catch (error) {
        console.error(error);
    }
}


// async 함수를 Promise로 바꾸는법
// await이 then이라고 생각하고 바꾸면 된다
// 아래방법은 편의상 하는거고 절대적인 정답이 아니다. (참고만)
async function b() {
    const a = await 1; // 2
    console.log('a', a);
    console.log('hmm');
    await null; // 4
    const b = await Promise.resolve(1); // 5
    console.log('b', b);
    return b; // return a+b 일 경우 이 방법으로는 바꾸기 매우 복잡해진다.
}

// 1. 프로미스화 하기
Promise.resolve(1)
    // 2. await에서 변수(a)에 대입하는 부분을 여기 매개변수로
    .then((a) => {
        // 3. await에서 다음 await 사이 코드를 여기로, 순서는 오른쪽에서 왼쪽으로 읽는다.
        console.log('a', a);
        console.log('hmm');
        return null; // 3. await null -> return null
    })
    .then(() => {
        // 4. 대입하는 변수가 없으면 매개변수 비우기
        return Promise.resolve(1); // await Promise.resolve(1) -> return Promise.resolve(1)
    })
    .then((b) => { // 5
        console.log('b', b);
        return b;
    })

