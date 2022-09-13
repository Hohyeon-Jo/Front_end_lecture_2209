//class를 사용해서 객체를 찍어내는 틀 만들기 

class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    intro(){
        console.log(`I'm ${this.name} and my age is ${this.age}, ${this.gender}.`);
    }
}

james = new Person('JAMES', 28, 'men');
maria = new Person('MARIA', 24, 'women');
console.log(james);
console.log(maria);
james.intro();
maria.intro();