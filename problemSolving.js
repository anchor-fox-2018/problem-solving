// Perhitunangan kalender jadwal member
//   Tono 2 hari sekali
//   Anton 4 hari sekali
//   Budi 5 hari sekali
// Tempat fitness pertama kali dibuka tgl 7, semua datang
// Tutup tiap kelipatan 5
// Kalender 31 hari
// --------------------------------------------------------
// STORE member with empty string
// FOR LOOP i from 7 to 31 with 1 increment
//   STORE nextDay equal to i - 7
//   IF i equal to 7
//     All member come: Tono, Anton Budi
//   ELSE IF i modulus 5 equal to 0
//     No member come
//   ELSE IF nextDay modulus by 5 && 4 && 2 equal to 0
//     Member come: Tono, Anton, Budi
//   ELSE IF nextDay modulus by 4 && 2 equal to 0 and not equal to 5
//     Member come: Tono, Anton
//   ELSE IF nextDay modulus by 5  && 2 equal to 0 and not equal to 4
//     Member come: Tono, Budi
//   ELSE IF nextDay modulus 2 equal to 0
//     Only Tono come
//   ELSE IF nextDay modulus 5 equal to 0
//     Only Budi come
//   ENDIF
// SHOW Tanggal + i + member
// RESET member
// END LOOP

var member = '';
for (var i = 7; i <= 31; i++) {
  var nextDay = i - 7;
  if (i === 7) {
    member = 'Tono, Anton, Budi';
    //tiap 5 hari tutup
  } else if (i % 5 === 0) {
    member = 'Tempat Fitness Tutup';
    //semua dateng lagi % 5, 4, 2
  } else if (nextDay % 5 === 0 && nextDay % 4 === 0 && nextDay % 2 === 0) {
    member = 'Tono, Anton, Budi';
  } else if (nextDay % 5 !== 0 && nextDay % 4 === 0 && nextDay % 2 === 0) {
    member = 'Tono, Anton';
  } else if (nextDay % 5 === 0 && nextDay % 4 !== 0 && nextDay % 2 === 0) {
    member = 'Tono, Budi';
  } else if (nextDay % 2 === 0) {
    member = 'Tono';
  } else if (nextDay % 5 === 0) {
    member = 'Budi';
  }
  console.log ('Tanggal '+ i +': '+ member);
  var member = '';
}
