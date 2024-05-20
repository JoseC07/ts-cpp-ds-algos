function removeDuplicates(nums: number[]): number {
    //organize array to fit all unique elemnts within k-range
    
    //start i at zero index, start j at first index
    // increment j until we find unque element i!=j
    //--> inrement i+1 then swap with j's unqie element
    //--> incement j+1
    
    let i: number = 0;
    
        for(let j = 1;j<nums.length; j++)
        {
            if(nums[j] !== nums[i])
            {
                i++;
    
                nums[i] = nums[j];
            }
    
           
        }
        return i+1;
    }