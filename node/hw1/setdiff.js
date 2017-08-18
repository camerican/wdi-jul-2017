// Return all elements that are in one array but not the other
module.exports = function(set1, set2) {
  const helper = function(setA, setB) {
    return setA.filter( function(c) {
      return setB.indexOf(c) == -1
    });
  }
  let a = helper(set1,set2);
  let b = helper(set2,set1);
  return a.concat(b);
  // let a = set1.filter( c => set2.indexOf(c) == -1 );
  // let b = set2.filter( c => set1.indexOf(c) == -1 );
  // return a.concat(b);
};