function aaa() {
    setTimeout(() => {
        console.log('d');
    }, 0);
    console.log('c');
}

setTimeout(() => {
    console.log('a');
    aaa();
}, 0);

setTimeout(() => {
    aaa();
    console.log('b');
}, 0);

// latentflip - 이벤트 루프 시각화 사이트
// 실행순서는?

// 호출스택
// 백그라운드
// 테스크 큐
// 콘솔

// 어떤과정을 거치는지 설명할 수 있어야한다