
/*
PSEUDO

FUNCTION gymCal()
    FOR LOOP with 7 as base and 31 as limit
        DEFINE calContent (ini isi setelah :)
        
        IF tanggal % 5 hasilnya 0 (setiap tanggal 5)
            isi calContent dengan 'Tempat Fitness Tutup'
        ELSE IF tanggal % 5 tidak 0
            IF setiap tanggal 2 sejak dibuka TRUE, calContent ditambah , Tono
            IF setiap tanggal 4 sejak dibuka TRUE, calContent ditambah , Anton
            IF setiap tanggal 5 sejak dibuka TRUE, calContent ditambah , Budi

            IF calContent tidak kosong, replace ', ' dengan '' (menghapus depan string)
        
        ELSE (tidak jelas, untuk error handling)
            calContent dibuat kosong

        DISPLAY result tiap hari
*/

function gymCal() {
    for (let i = 7; i <= 31; i++) {
        var calContent = '';

        //tutup tempat fitness
        if (i % 5 === 0) {
            calContent = 'Tempat Fitness Tutup';
        }

        //isi nama
        else if (i % 5 !== 0) {
            if ((i - 7) % 2 === 0) {
                calContent += ', Tono';
            }
            if ((i - 7) % 4 === 0) {
                calContent += ', Anton';
            }
            if ((i - 7) % 5 === 0) {
                calContent += ', Budi';
            }

            if (calContent.length > 0) {
                calContent = calContent.replace(', ', '');
            }
        }
        //if something happened
        else {
            calContent = '';
        }

        //print
        console.log(`Tanggal ${i}: ${calContent}`);
    }
}

//running it
gymCal();