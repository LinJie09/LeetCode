
const  isValid = (s) => {
    const stack = [];
    // using key and value to compare 
    const symStr = {
        '(':')','{':'}','[':']'
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (symStr[char]){
            stack.push(char);
        }else{
            const top = stack.pop();
            if(symStr[top] !== char){
                return false;
            }
        }  
    };
    return stack.length === 0;
};

console.log("result >>",isValid("()"));