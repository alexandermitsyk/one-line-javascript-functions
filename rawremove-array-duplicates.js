const removeDuplicates = (arr) => [...new Set(arr)];

removeDuplicates([31, 56, 12, 31, 45, 12, 31]);
//[ 31, 56, 12, 45 ]