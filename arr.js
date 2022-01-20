// 1
pushToFront = (arr, val) => {
  let temp1 = arr[0];
  let temp2 = arr[1];
  for (let i = 0; i < arr.length && temp1 != undefined; i++) {
    arr[i + 1] = temp1;
    temp1 = temp2;
    temp2 = arr[i + 2];
  }
  arr[0] = val;
};
pushToFront(myArr, 8);
console.log(myArr);

2;
var myArr = [7, 5, 4, 3, 2];
function firstPop(array) {
  for (var i = 0; i < myArr.length; i++) {
    if (i == 0) {
      myArr[i] = array[array.length - 1];
    }
    myArr[i] = array[array.length - 1 - i];
  }
  var pop = myArr.pop();
  console.log(pop);

  return pop;
}
firstPop([1, 2, 3, 44]);

//3
insertAtFront = (arr, val, ind) => {
  for (var i = arr.length - 1; i >= ind; i--) {
    arr[i + 1] = arr[i];
  }
  arr[ind] = val;
};

var test = [4, 7, 8, 2, 5, 1];
insertAtFront(test, 3, 2);
console.log(test);
