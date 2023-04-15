function findDistinctElements(arr1, arr2) {
    const distinctSet = new Set([...arr1, ...arr2]);
    const intersectionSet = new Set(arr1.filter((element) => arr2.includes(element)));
    const differenceSet = new Set([...distinctSet].filter((element) => !intersectionSet.has(element)));
    return Array.from(differenceSet);
  }
  function sumDistinctElements(arr1,arr2) {
    const distinctSet = new Set(arr1,arr2);
    const sum = Array.from(distinctSet).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
  }
  
  findDistinctElements([1,2,3,6,7],[4,8,9,2,1])
  sumDistinctElements([1,2,3,6,7],[4,8,9,2,1])
