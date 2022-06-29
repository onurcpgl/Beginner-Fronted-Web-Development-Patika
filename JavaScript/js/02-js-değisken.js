// let ve const ile değişken tanımlama.

// ************* var ile degisken tanımlamak:
//var serverName="kodluyoruz.org";
//console.log(serverName);

// ************* let ile degiskeni bos tanımlamak:
let serverName;
console.log(serverName);
// ************* let ile degiskene bilgi atamak:
serverName="google.com";
console.log(serverName);
// ************* let ile degiskene bilgi atayarak tanımlamak:
let password="1234";
console.log(password);
// ************* degisken atamasi yapmadan once kullanmaya calismak:
// Hatalı kullanım Yerlerini değiştir.
console.log(fullName);
let fullName="Onur Çöpoğlu";

// let ile tanımlanan değişkeni daha sonrasında değiştirebiliriz.
fullName="Hakan Yalçınkaya";
console.log(fullName);

// Birleştirme işlemi veya ekleme işlemi

fullName + "Yeni eklenen bilgi"; // Acaba eklendi mi? HAYIR 
fullName = fullName+"Yeni bilgi"; // Bu şekilde eklenebilir.
console.log(fullName)

// ************* const ile degiskeni bos tanımlamaya calismak:
// const ile değişken tanımlarken içini boş bırakamayız içi dolu olmalı.
const SERVER_PASSWORD="asfasa57asd";
console.log(SERVER_PASSWORD) // BİR KERE TANIMLANIR DAHA SONRA DEĞİŞMEZ.
// *************** EĞER BİR ŞEY DEĞİŞMİCEKSE ONU CONST İLE DEĞİŞECEK İSE LET İLE TANIMLARIZ ***************

// ************* const ile degisken tanımlamak: