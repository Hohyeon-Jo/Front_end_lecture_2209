// ES-6(2015년)에 추가된 사항

// 1. Destructuring assignment
const fruits = ['apple', 'banana', 'cherry'];
const [a, b, c] = fruits;
console.log(a, b, c);

const product = {name: 'mouse', price:20000};
const {name, price} = product;
console.log(name, price);

// 2. Spread syntax
const fruits1 = ['grape', 'mango'];
const fruits2 = [fruits, fruits1];
console.log(fruits2);
const fruits3 = [...fruits, ...fruits1];
console.log(fruits3);

const numbers = [4, 16, 9, 25, 36];
console.log(Math.max(numbers));         // 결과가 NaN
console.log(Math.max(...numbers));      // Math.max(4, 16, 9, 25, 36)  -> 36 출력

// 3. let, const
// 4. template literals     ` `
// 5. 3항 연산자            ? :
// 6. 화살표 함수
// 7. default parameters        함수의 인자의 default 값을 설정할 수 있음
// 8. object shorthand property         object의 key값과 value값 같으면 생략    {name:name, price:price} => {name, price}
// 9. class
// 10. Set
const mySet = new Set();
mySet.add(1);
mySet.add(3);
mySet.add(1);
console.log(mySet); // 중복 제거됨
console.log(mySet.has(3));  // true
console.log(mySet.size);    // 2
