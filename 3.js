function cek_kata(kata) {
  var daftarKata = kata.split(" ");
  var jumlah = 0;
  for (var i=0 ; i<daftarKata.length ; i++) {
    if (isNaN(Number(daftarKata[i]))) jumlah++;
  }
  console.log(`${jumlah}/${daftarKata.length}`);
}

cek_kata("ini adalah sebuah kata");
cek_kata("2 pasang sandal hilang");
