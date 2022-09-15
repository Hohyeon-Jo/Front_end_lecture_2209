const today = new Date();
console.log(today.toDateString());          // 날짜, 요일
console.log(today.toLocaleString());        // Timezone 반영한 현재 시간

function myLocalTimeFormat(date) {
    
    let year = String(date.getFullYear()).substring(2);
    let month = String(date.getMonth()+1);
    month = month.length == 1 ? '0' +month : month;
    let day = `${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`;
    let hour = `${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}`;
    let minute = `${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}`;
    let sec = `${date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()}`;
    return `${year}-${month}-${day}   ${hour} : ${minute} . ${sec}`
}
console.log(myLocalTimeFormat(today));


// Unix time
const unixDate = new Date(1.6632e12);
console.log(unixDate.toLocaleString());

//문자열로 생성
const strDate = new Date('2022-09-14');
console.log(myLocalTimeFormat(strDate));

//시간요소로 생성
const elementDate = new Date(2022,9-1, 14, 9, 50);      //원른 1을 빼 주어야 한다 
console.log(myLocalTimeFormat(elementDate));