
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')



var count = 1;
let intervalId = setInterval(function () {
    if (count <= 20) {
        a.style.background = "Red" 
        
        // console.log('Red Light');
        count++
    }
    else if(count <=30){
        b.style.background = "Yellow" 
    // console.log('Yello Light');
    count++
    }
    else if(count <=40){
        c.style.background = "Green"
        // console.log("Green Light");
        count++
 
       }
      
    else{
        a.style.background = "Red"
        b.style.background = "Yellow"
        c.style.background = "Green"
        count = 1
        
    }

},100)