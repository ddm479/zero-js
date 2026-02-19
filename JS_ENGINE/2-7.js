const results = await Promise.all([p1, p2, p3]);

// 동시에 조작하려면 map()
results.map(async () => {
    await result조작(); // p1, p2, p3 조작 동시에( = 백그라운드에서 동시에 동작하는것 처럼 느껴진다)
}, []);

// 차례대로 사용하려면 for of
for (let result of results) {
    await result조작(); // p1 끝난 후, p2 끝난 후, p3
}