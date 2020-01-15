//if you are given a number and an array, how many times will two numbers in the array add up to the number you were given

var arr = [1, 2, 3, 4, 5, 6, 10];

var num = 9;

var count = 0;

for (let el in arr) {
  //console.log('el1');
  //console.log(num);
  for (let eltwo in arr) {
    //console.log(arr[el] + arr[eltwo]);
    if (arr[el] + arr[eltwo] === num) {
      
      count++;
    }
  }
}
console.log(count);