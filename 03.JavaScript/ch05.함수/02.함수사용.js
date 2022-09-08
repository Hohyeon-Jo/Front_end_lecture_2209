//약수를 찾아서 array로 만들어서 반환하는 함수 
function getDivisors(num){
    let divisors = [];
    for (let k=1; k<num; k++){
        if (i % k == 0) {
            divisors.push(k);
        }
    }
    return divisors;
}

//array를 매개변수로 받아서 합을 반환하는 함수
function sumArray(array) {
    let sum = 0;
    for (let div of array){
        sum += div;
    }
    return sum;
}

for (let i=2; i<=10000; i++) {
    const array = getDivisors(i);
    const arrSum = sumArray(array);
    if (arrSum == i){
        console.log(i);
        console.log(array.toString());
    }
}