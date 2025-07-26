
const removeDuplicates = (nums)=>{
    const len = nums.length;
    let pointer = 0;
    for(let i = 1;i < len;i++){
        // 如果跟下一個不一樣
        if(nums[pointer] !== nums[i]){
            pointer ++;
            nums[pointer] = nums[i];

        }
    }
    return pointer + 1;




    // const newNums = [];
    // const seen = new Set();
    // nums.forEach((elements)=>{
    //     if(!seen.has(elements)){
    //         seen.add(elements);
    //         newNums.push(elements);
    //     }
    // })
    // return newNums
}

