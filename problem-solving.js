var jumlahHari = 31;
var tanggalMulai = 7;
var namaDanJadwal = [['Tono',2],['Anton',4],['Budi',5]];
var sisaHari = jumlahHari - 7;
function jadwalMember(jumlahHari,tanggalMulai,namaDanJadwal){
    var hasil = '';
    for(var i = tanggalMulai;i <= jumlahHari;i++){
        hasil+= 'Tangggal '+String(i)+': ';
        if(i % 5 === 0 && i !== tanggalMulai){
            hasil += 'Tempat Fitness Tutup'
        }
        for(var j = 0;j < namaDanJadwal.length;j++){
            if((i - tanggalMulai)%namaDanJadwal[j][1] === 0 && i % 5 !== 0 ){
                if(hasil[hasil.length-2] !== ':'){
                    hasil+= ', '
                }
                hasil+= namaDanJadwal[j][0];
                
            }
            if(j === namaDanJadwal.length-1 && hasil[hasil.length-1] === ','){
                hasil.substring(0,hasil.length-1)
            }
            
                
        }
        
        if(i !== jumlahHari){
            hasil += '\n'
        }
    }    
    console.log(hasil)
}
jadwalMember(jumlahHari,tanggalMulai,namaDanJadwal)