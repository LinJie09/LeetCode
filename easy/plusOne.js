


const plusOne = (digits) =>{
    if(digits.length === 0) return digits[1];
    for(let i = digits.length - 1;i >= 0;i--){
        if(digits[i] < 9){
            digits[i] += 1;
            return digits;
        }
        digits[i]= 0;
    }
    digits.unshift(1);
    return digits;
}


const arr = [9]
console.log(plusOne(arr));