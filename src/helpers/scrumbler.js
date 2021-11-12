function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

export function scrumbler(word) {
  var arr = word.split(""),
    n = arr.length;

  if (n <= 3) return word;

  if (n === 4) return arr[0] + arr[2] + arr[1] + arr[3];

  if (n > 4) {
    for (var i = n - 2; i > 1; i--) {
      var j = Math.floor(Math.random() * i) + 1;
      swap(arr, i, j);
    }
    return arr.join("");
  }
}
