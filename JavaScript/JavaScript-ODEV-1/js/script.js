

let isim=prompt("Lütfen isminizi giriniz: ");

let deger=document.querySelector("#myName");

deger.innerHTML=isim;


function showTime() {
    var günler=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    var time=new Date();
    var saat=time.getHours();
    var dakika=time.getMinutes();
    var saniye=time.getSeconds();
    var gün=time.getDay();


    document.querySelector("#myClock").innerHTML=`
    ${saat}:${dakika}:${saniye}  ${günler[gün]}
    `;
    var time
    time = setInterval('showTime()', 1000);
}


showTime();


    
    

