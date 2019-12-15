// Try edit message

var numArr = [1, 2, 3, 4];
var checked = [0, 0, 0, 0];
var cnt = 1;

var save = new Array();
function gen(len) {
  if(len == numArr.length) {
    console.log( cnt);
    cnt++;
    console.log(save);
    return;
  }
  var i;
  for(i = 0; i < numArr.length; i++) {
    if(checked[i] == 0) {
      checked[i]  = 1;
      save.push(numArr[i]);
      gen(len + 1);
      save.pop();
      checked[i] = 0;
    }
  }
}

console.log(gen(0));
