/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start

//console.log(twoSum([2,7,11,15],9));


function twoSum(nums: number[], target: number): number[] {
    let indices: number[] = [0,0];
    for(let i = 0; i < nums.length;i++){
        for(let j = i + 1; j < nums.length;j++)
        {
            if((nums[i]+nums[j]) === target)
            {
                indices[0] = i;
                indices[1] = j;
                return indices;
            } 
        }
    }
    return new Array();
};


// @lc code=end

