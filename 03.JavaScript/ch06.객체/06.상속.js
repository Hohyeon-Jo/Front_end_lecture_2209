//상속(Inheritnce)
class Person{
    constructor(name='홓길동', age=25, gender='남자'){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    toString(){
        return `나는 ${this.name} 이고 나이는 ${this.age}이며 ${this.gender}.`;
    }
}


const hong = new Person();
console.log(hong.toString());
console.log('---------------------------------------------------------------------------------------')

class Student extends Person{
    constructor (name, age, gender, scholarship=100000){
        super(name, age, gender);
        this.scholarship = scholarship;
    }
    toString(){
        return super.toString() +'\n' + `장학금은 ${this.scholarship}원을 받았습니다.`;
    }
}
const student = new Student('성춘향',17,'여자', 200000);
console.log(student.toString());    

//Teacher 클래스 - Person 상속, 속성: 담당부서 추가, toString() 메소드 재정의

class Teacher extends Person {
    constructor(name, age, gender, vlaues){
        super(name, age, gender);
        this.vlaues = vlaues;
    }
    toString(){
        return super.toString()+`\n부서는 ${this.vlaues}입니다`
    }
}
const teacher = new Teacher('김선생', 40, '남자','국어');
console.log(teacher.toString());