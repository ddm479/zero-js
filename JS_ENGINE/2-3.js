setImmediate(() => {
    console.log('a');
});
setTimeout(() => {
    console.log('b');
}, 1000);
setTimeout(() => {
    console.log('c')
}, 2000);
Promise.resolve().then(() => {
    console.log('p');
})

// 한번 비동기는 계속 비동기이다
// 비동기는 동시의 문제가 아니다. 순서의 문제다

// 1. 백그라운드에서는 동시에 실행된다. 원래 js에서는 동시 실행의 개념이 없다.
// 2. 백그라운드에 타이머나 이벤트 리스너가 등록이 되고 조건이 충족되면 태스크 큐( micro 또는 매크로 )로 옮긴다. 그 때 타이머나 Promise.then 등은 백그라운드에서 제거되지만 setInterval, 이벤트 리스너 같은거는 계속 존재한다. 
// 3. promise, process.nextTick -> micro 큐에 들어가고 나머지는 매크로 큐에 들어간다.
// 4. 호출 스택이 비면 큐에들어온 순서대로 호출스택에 들어가서 실행된다.
// 5. 만약 호출스택에 동시에 들어가야한다면 우선순위는 micro > 매크로


// 이런거 하지마 1
setImmediate(() => {
    console.log('a');
});
setTimeout(() => {
    console.log('b');
}, 0);


// 이런거 하지마 2
setTimeout(() => {
    console.log('a');
}, 0);
setTimeout(() => {
    console.log('b');
}, 0);

// 차라리 같이 묶던가 따로써야한다면 순서상관없게 짜기
setTimeout(() => {
    console.log('a');
    console.log('b');
}, 0);