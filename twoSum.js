// 
const twoSum = (nums,target) =>{
    // created the array to contain the number
    let map =[]
    // find the number will conform to target or not
    for (let i = 0 ;i <nums.length; i++){
        let tmp = nums[i]
        if(map[target - tmp] >= 0){
            return [map[target - tmp],i]
        }else{
            map[tmp] = i
        }
    }
}
console.log("result >>",twoSum([2,7,11,15],9));
console.log("result >>",twoSum([3,2,4],6));
console.log("result >>",twoSum([3,3],6));
