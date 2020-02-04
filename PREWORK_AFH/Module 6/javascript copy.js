 console.log('JS ready');

 var opacity =0;
 var intervalID=0; 

 //grow
 document.getElementById("button1").addEventListener("click", function(){
            
    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "200px";

 });

 //blue
 document.getElementById("button2").addEventListener("click", function(){
    
    document.getElementById("box").style.backgroundColor = "blue";

 });

 //fade
 document.getElementById("button3").addEventListener("click", function(){
    
    document.getElementById("box").style.backgroundColor = "white";
    
    //document.getElementById("box").fadeOut()
    //{
       // intervalID=setInterval(hide,20);
    //}
    //document.getElementById("box").hide()
    //{
       // var box = document.getElementbyId("box");
            //opacity = Number(window.getComputedStyle(box).getPropertyValue("opacity"));
            //if(opacity>0)
            //{
                //opacity=opacity-0.1;
                //box.style.opacity=opacity;
           // }
           // else {
               // clearInterval(intervalID);
            //}
      //}
   
 });

 //reset
 document.getElementById("button4").addEventListener("click", function(){
    
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";


 });