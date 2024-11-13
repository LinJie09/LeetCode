
const longestCommonPrefix = (strs) =>{
    const firstStr = strs[0];
    if (!firstStr) return ''
    let condition = true
    let count = -1 

    while(condition){
        count += 1
        // every 怪怪的
        condition = strs.every(str =>(
            firstStr[count] === str[count]
        ))
        if(count === firstStr.length){
            condition = false
        }
    }
    return firstStr.slice(0,count)
}

console.log('result >>',longestCommonPrefix("flower","flow","flight"));