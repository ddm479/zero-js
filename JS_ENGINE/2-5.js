// async 함수는 첫번째 await전까지는 동기적으로 실행함 이후는 비동기 제어
// 그리고 함수가 무엇을 반환하든 무조건 Promise.resolve()로 감싸서 반환합니다.
async function c() {
    console.log('2');
    const a = await 1; // await은 뒤에 오는 게 무엇이든 일단 프로미스로 변환해서 처리한다. Promise.resolve(1)로 변환
    console.log('4');
    console.log('a', a);
    console.log('hmm');
    await null;
    const b = await Promise.resolve(1);
    console.log('b', b);
    return a + b;
}

// 백그라운드에 await3개, then이 2개 등록되었다고 생각
// 등록된 await과 then은 특정 조건이 만족될 때 태스크 큐로 넘어간다.
// 그 특정조건은 Promise일 경우 resolve, 에러는 reject, Promise가 아닌 값은 자동으로 넘어간다.
console.log('1');
c().then((result) => {
    console.log(result);
}).then((result2) => {
    console.log(result2);
});
console.log('3');