/*
    PSEUDOCODE
    FOR counterKalender is equal tanggalBuka, loop until counterKalender is less equal panjangBulan, increment counterKalender by 1
        DECLARE local variable array with data type array 
        IF counterHadir % tono is equal 0
            PUSH "Tono" to array variable
        IF counterHadir % anton is equal 0
            PUSH "Anton" to array variable
        IF counterHadir % budi is equal 0
            PUSH "Budi" to array variable 
        IF counterKalender % tanggalLibur is equal 0
            SPLICE from index 0 to array length 
            PUSH "Tempat Fitness Tutup" to array variable
        increment counterHadir by 1
        LOG `Tanggal ${counterKalender}: ${array}`
*/

function name() {
    let tanggalBuka = 7;
    let panjangBulan = 31;
    let counterHadir = 0;
    let tono = 2;
    let anton = 4;
    let budi = 5;
    let tanggalLibur = 5;
    for (let counterKalender = tanggalBuka; counterKalender <= panjangBulan; counterKalender++) {
        let array = [];
        if (counterHadir % tono === 0) {
            array.push("Tono");
        }
        if (counterHadir % anton === 0) {
            array.push("Anton");
        }
        if (counterHadir % budi === 0) {
            array.push("Budi");
        }
        if (counterKalender % tanggalLibur === 0) {
            array.splice(0,array.length);
            array.push("Tempat Fitness Tutup");
        }
        counterHadir++;
        console.log(`Tanggal ${counterKalender}: ${array}`)
    }
}

name();