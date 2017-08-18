module.exports = function(set1,set2) {
  return set1.filter( c => set2.indexOf(c) > -1 );
};

// function(set1,set2) {
//   return set1.filter( function(c) {
//     return set2.indexOf(c) > -1;
//   });
// };