function create_triangle(jumlah_bintang){ 
    jumlah_bintang = jumlah_bintang + 1;
    let hasil = ""; 
    for (let i = 1; i<jumlah_bintang; i++){ 
        for(let j = 1; j<jumlah_bintang; j++){ 
            if(i+j >= jumlah_bintang){
                hasil = hasil + "*";
            }
            else{
                hasil = hasil + " ";
            }
        }
        hasil = hasil + "\n";
    }
    console.log(hasil)
}
create_triangle(5) 
