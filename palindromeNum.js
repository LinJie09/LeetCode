// solution 1 :
const isPalindrome = (x) =>{
    if (x < 0 || x > Math.pow(2,32)-1) return false
    if (x < 10) return true
    let num = x,tmp = x % 10
    // parseInt using way is that string become deciaml number and ignored space and character
    x = parseInt(x / 10)
    while(x != 0){
        tmp *= 10
        tmp = tmp + x %10
        x = parseInt(x / 10)
    }
    return tmp == num
}

// console.log(isPalindrome(10));

// solution 2 :
// const isPalindrome = (x)=>{
//     if (x < 0) return false;
//     const tmp = parseInt(x.toString().split('').reserve().join(''))
//     return tmp === x;
// }
// console.log(isPalindrome(121));