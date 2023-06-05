
document.getElementById("min").value="00";
document.write(":");
 document.getElementById("sec").value="00";
 document.getElementById("mili").value="00";

 var totalcount= document.getElementById("sec").value;
var  mymiliInterval;
var min=0;
var sec=0;
var mili=0;

function start(){

   mymiliInterval=setInterval(function(){
      mili=mili+100;
      if(mili==1000){
        mili = 0;
        document.getElementById("mili").value=mili;
        sec=sec+1;
        if(sec==59){
          sec = 0;
          document.getElementById("sec").value=sec;
          min=min+1;
          document.getElementById("min").value=min;
        } 
        else {
          document.getElementById("sec").value=sec;
        }
      } else {
        document.getElementById("mili").value=mili;
      }    
   },100);
}
  
//   mymiliInterval=setInterval(_ => {
//       mili+=100;
  
//       let ms = mili % 1000;
//       let s = Math.floor((mili /  1000)) % 60;
//       let m = Math.floor((mili / 60000)) % 60;
  
//       document.getElementById("mili").value=ms;
//       document.getElementById("sec").value=s;
//       document.getElementById("min").value=m;
//     }, 100);
// }

function pause(){
  clearInterval(mymiliInterval);
}
function reset(){
  clearInterval(mymiliInterval);

  document.getElementById("mili").value="00";
    document.getElementById("sec").value="00";
    document.getElementById("min").value="00";
   min=0;
 sec=0;
 mili=0;
}



//     document.getElementById("sec").value=count;
// count=count+1;
  


  

