/* 4. 다음 배열에서 제조사(manufacturer)와 모델명(model)을 분리해서 
별도의 배열을 각각 만드세요.
const cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino']; */

const cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino'];
const manufacturer = [];
const model = [];

for (i in cars) {
    let splits = cars[i].split(' ');
    manufacturer.push(splits[0]);
    model.push(cars[i].split(splits[0].length+1));
}
console.log(manufacturer);
console.log(model);