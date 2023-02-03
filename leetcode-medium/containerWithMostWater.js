var maxArea = function(height) {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
      let currArea = (j - i) * Math.min(height[i], height[j]);
      maxArea = Math.max(maxArea, currArea);
      if (height[i] <= height[j]) {
          i++;
      } else {
          j--;
      }
  }
  return maxArea;
};