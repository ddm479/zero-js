// 1분퀴즈


class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showName() {
        console.log(this.name);
    }
    showAge() {
        console.log(this.age);
    }

}

class Programmer extends Human {
    constructor(name, age, skills) {
        super(name, age);
        this.skills = [...skills]; // 얕은 복사
    }
    showSkills() {
        console.log(this.skills);
    }
}

const programmer = new Programmer(
    '초보자',
    49,
    ['html', 'css', 'javascript'],
)

programmer.showSkills();