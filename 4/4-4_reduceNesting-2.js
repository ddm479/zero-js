if (a) {
    if (b) {
        if (c) { }
    }
    else {
        if (d) {
            if (e) { }
            else { }
        }
        else { }

    }
}

// if문 중첩 제거하기
if (!a) { return }
// 여기서부턴 a 만족
if (b && c) { return }
// bc (ff), (tf), (ft)
if (b) { return }
// 여기서부터 !b 만족

if (!d) { return }
// 여기서부터 d 만족
if (e) { return }