class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int unique;
        vector<int> uniqueVals;
        
        int *ptr = &unique;
        for(int i =0; i<nums.size();i++)
        {
            if(ptr == nullptr|| nums[i] != unique)
            {
                unique = nums[i];
                uniqueVals.push_back(nums[i]);
                
            }
        }
        
        nums = uniqueVals;
        
        return nums.size();
    }
};
