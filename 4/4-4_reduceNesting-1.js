function test() {
    let result = '';
    if (a) {
        if (!b) {
            result = 'c';
        }
    } else {
        result = 'a';
    }
    result += 'b';
    return result;
}

// if문 중첩 제거하기
function test2() {
    let result = '';
    if (!a) {
        result = 'a';
        result += 'b';
        return result;
    }
    if (!b) {
        result = 'c';
    }
    result += 'b';
    return result;
}

