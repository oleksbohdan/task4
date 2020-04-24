let sum = 0;
for(let i = 1; i <=100; i++){
    sum += i;
}
console.log(sum);
console.log('');
//********************************
let arr = [1, 2, 3, 4,5];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log('');
//********************************
arr = [-1, 22, 3, 44, 5];
let max = arr[0];
for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log(max);
console.log('');
//********************************
let nextNumber;
let stat = {
    positive: 0,
    negative: 0,
    zero: 0
}
for(let i = 0; i < 8; i++){
    nextNumber = +prompt("Введіть число ");
    if(isNaN(nextNumber)){
        i--;
    }else{
        console.log(`Введене число: ${nextNumber}`);
        switch (true) {
            case nextNumber < 0:
                stat.negative++;
                break;
            case nextNumber > 0:
                stat.positive++;
                break;
            case nextNumber === 0:
                stat.zero++;
                break;
        }
    }
}
console.log(stat);
console.log('');
//********************************
for(let i = 1; i < 10; i++){
    console.log(`8 x ${i} = ${8 * i}`);
}
console.log('');
//********************************
arr = [2, 5, 9, 15, 0, 4];
for(let i = 0; i < arr.length; i++){
    let curr = arr[i];
    if(curr < 10 && curr > 3){
        console.log(curr)
    }
}
console.log('');
//********************************
let ifContinue = false;
do{
    let nums = [];
    let sign;
    let sum;
    for(let i = 0; i < 2; i++){
        nums[i] = +prompt(`Введіть число #${i + 1}.`);
        if(isNaN(nums[i])){
            alert('Число введено невірно.');
            i--;
        }
    }
    do{
        sign = prompt('Введіть знак.');
        if(sign.length !== 1){
            alert('Знак вказує один символ.');
            ifContinue = true;
        }
        else{
            ifContinue = false;
            switch (sign) {
                case '+':
                    sum = nums[0] + nums[1];
                    break;
                case '-':
                    sum = nums[0] - nums[1];
                    break;
                case '*':
                    sum = nums[0] * nums[1];
                    break;
                case '/':
                    sum = nums[0] / nums[1];
                    break;
                default:
                    alert('Невідома операція.');
                    ifContinue = true;
                    break;
            }
        }
    }while(ifContinue);
    alert(`${nums[0]} ${sign} ${nums[1]} = ${sum}`);
    ifContinue = confirm('Повторити?');
}while(ifContinue);
