export function scrumbler(word) {
  var a = word.split(""),
    n = a.length;
  if (n <= 3) return word;
  if (n === 4) return a[0] + a[2] + a[1] + a[3];
  if (n > 4) {
    for (var i = n - 2; i > 1; i--) {
      var j = Math.floor(Math.random() * i) + 1;
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  }
}
