

const addBinary = (a,b)=>{
    let result = [];
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while(i >= 0 || j >= 0 || carry){
        let sum = carry;
        if(i >= 0){
            sum += parseInt(a[i],10);
            i--;
        }
        if(j >= 0){
            sum += parseInt(b[j],10);
            j--;
        }

        carry = Math.floor(sum / 2);
        result.unshift(sum % 2)
    }
    return result.join('');
}

console.log(addBinary('1010','1011'));