// Prototype - 옛날 javascript에서 제공하는 방법
//객체를 찍어내는 틀(class)의 이름은 대문자로 시작
//권장하는 방법이 아님

function Person(name, age, gender)  {
    this.name = name;
    this.age = age;
    this.gender = gender;
    Person.prototype.intro = function(){
        console.log(`I'm ${this.name} and my age is ${this.age}, ${this.gender}.`);
    }
}

james = new Person('JAMES', -1, 'men');
maria = new Person('MARIA', 24, 'women');

james.intro();
maria.intro();