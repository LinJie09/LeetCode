
const lengthOfLastWord = (s)=>{
    let count = 0;
    let str = s.length - 1;

    while(str >= 0 && s[str] === ' '){
        str --;
    }

    while(str >= 0 && s[str] !== ' '){
        count ++;
        str --;
    }
    return count;
} 
