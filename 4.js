function findPair(arr) {
  if (!Array.isArray(arr)) return "Bukan array!";
  else {
    var num = new Array(101);
    var jumlah = 0;
    for (var i = 0; i < 101; i++) {
      num[i] = 0;
    }
    for (var i = 0; i < arr.length; i++) {
      num[arr[i]]++;
    }
    for (var i = 0; i < num.length; i++) {
      if (num[i] > 1) {
        jumlah += parseInt(num[i] / 2);
      }
    }
    if (jumlah === 0) return "Tidak ada pasangan yang ditemukan";
    else return `${jumlah} pasang`;
  }
}

console.log(findPair([1, 5, 5, 10, 9, 13, 5, 1]));
console.log(findPair([20, 50, 70, 10, 70, 30, 10, 30, 50]));
console.log(findPair([1, 2, 3, 4, 5]));
console.log(findPair("aku ganteng"));
