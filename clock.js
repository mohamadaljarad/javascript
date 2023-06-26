let x=prompt("Adiniz nedir?")
const myName= document.getElementById("myName");
myName.innerHTML=x;
function showTime(){
 let tarih=new Date();
 let saat =tarih.getHours();
   let dakika=tarih.getMinutes();
 let saniye =tarih.getSeconds();
 
 let myClock=document.getElementById("myClock");
  myClock.innerHTML= saat+":"+dakika+":"+saniye;
}

setInterval(showTime,1000)