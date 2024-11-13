
const climbStairs = (n) =>{
    let a = 1,b = 1;
    if(n<=1) return 1;
    for(let i = 2;i<=n;i++){
        let tmp = a + b;
        a = b;
        b = tmp;
    }
    return b;
}
