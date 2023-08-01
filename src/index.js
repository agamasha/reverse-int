module.exports = function reverse (n) {
  let result = '';
  let a = n.toString();
  for (let i = (a.length - 1); i >= 0; i--){
    result = result + a[i];
  }
  return parseInt(result);
}
