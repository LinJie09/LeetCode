

const mySqrt = (x) =>{
    let left = 0;
    let right = x;
    if(x <= 1) return x;
    while(left < right){
        let middle = Math.floor((right + left) / 2);
        let squre = middle * middle;
        if(squre === x) return middle;
        if(squre < x){
            left = middle + 1;
        }else{
            right = middle;
        }
    }
    return left - 1;
}  


console.log(mySqrt(4));