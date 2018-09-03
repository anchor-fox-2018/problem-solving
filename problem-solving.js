/*
PSEUDOCODE
(1). set var date = 7.
(2). lakukan looping dari i = date sampai i = 31.
(3). di dalam looping, deklarasi var member (array kosong),
(4). buat kondisi jika (selisih indeks dengan date) modulus 2 sama dengan 0, push Tono ke member. 
(5). jika (selisih indeks dengan date) modulus 4 sama dengan 0, push Anton ke member.
(6). jika (selisih indeks dengan date) modulus 5 sama dengan 0, push Budi ke member.
(7). jika indeks modulus 5 sama dengan 0. tampilkan tanggal i tempat fitness tutup.
(8). selain kondisi (7) tampilkan tanggal indeks dan tampilkan isi array member.
*/

function fitnessSchedule(tanggalBuka){
    // var member = 'Tono, Anton, Budi';
    console.log('Tanggal ' + tanggalBuka + ': ' + 'Tono, Anton, Budi');
    for(var i = tanggalBuka+1; i <=31; i++){
        var member= [];
        var selisih = i - tanggalBuka;
        if(i%5 == 0){
            console.log('Tanggal ' + i + ': Tempat Fitness Tutup');
        } else {
            if(selisih%2 == 0){
                member.push('Tono');
            }
            if(selisih%4 == 0){
                member.push('Anton')
            }
            if(selisih%5 == 0 ){
                member.push('Budi');
            }
            // console.log(member);
            console.log('Tanggal ' + i + ': ' + member);
        }
    }
}

fitnessSchedule(7);