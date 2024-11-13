
const strStr = (haystack,needle)=>{
    if(haystack === needle || needle === '') return 0;
    for(let i = 0; i < haystack.length;i++){
        if(haystack[i] === needle[0]){
            let newString = haystack.substr(i,i+needle.length)
            if(newString === needle){
                return i;
            } 
        }
          
    }
    return -1;
}