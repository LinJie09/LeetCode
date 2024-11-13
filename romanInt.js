const romLetters = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
const romNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
const romanToInt = (s)=>{
    let result = 0;
    for(let i = 0 ;i < s.length;i++){
        let currentLetters = romNum[romLetters.indexOf(s[i])];
        let nextLetters = romNum[romLetters.indexOf(s[i + 1])];
        if(nextLetters > currentLetters){
            result += nextLetters - currentLetters;
            i++;
        }else{
            result += currentLetters;
        }
    }
    return result;
}

console.log("result >>",romanToInt("III"));