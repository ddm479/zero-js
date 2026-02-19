function delayP(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};

// Promise란, 실행은 바로 하되, 결괏값을 나중에 원할 때 쓸 수 있는 것
// 실행은 바로 ---> 결괏값은 나중에 나옴 -> 결괏값을 사용할 때는 더 나중 (기본적인 흐름)

async function a() {
    await delayP(3000);
    await delayP(6000);
    await delayP(9000);
    // delayP(3000)가 끝나야 6초 타이머가 백그라운드에 등록된다. 총 18초 소요 
}

// 동시에 백그라운드에 타이머를 등록하려면 아래방식
async function b() {
    const p1 = delayP(3000);
    const p2 = delayP(6000);
    await Promise.allSettled([p1, p2]);
    await delayP(9000);
    // 총 15초
}
b();

async function c() {
    const a = await 1;
    const b = await 2;
    return a + b;
}

// 억지로 Promise로 바꾸기 (스코프 활용)
// 이렇게까지는 하지 않아도 된다.
(function () {
    let a;
    let b;
    return Promise.resolve(1)
        .then((result) => {
            a = result;
            return 2;
        })
        .then((result) => {
            b = result;
            return a + b;
        })
})();


// 2-7 async b함수를 Promise로 바꾸면
new Promise((resolve, reject) => {
    const p1 = delayP(3000);
    const p2 = delayP(6000);
    return Promise.allSettled([p1, p2]);
}).then(() => {
    return delayP(9000);
}).then(() => {

});