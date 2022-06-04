const minuteInput = document.querySelector("#minuteInput")
const secondInput = document.querySelector("#secondInput")
const start = document.querySelector("#start")
const reset = document.querySelector("#reset")
const timer = document.querySelector("#timer")






start.addEventListener("click",(e)=>{
    let control=true;
    start.disabled=true
    minuteInput.disabled=true
    secondInput.disabled=true
    var minuteInput2 = minuteInput.value;
    var secondInput2=secondInput.value
    if(secondInput2==0 && minuteInput2==0){
        control=false
     }
    if(secondInput2>60){
        var plusMinute=Math.floor(secondInput2/60)
        var plusSecond=secondInput2%60
        console.log(plusSecond)
        minuteInput2= parseInt(minuteInput2) + parseInt(plusMinute)
        secondInput2=plusSecond
    }

var myTimer =setInterval(function() {
    if(secondInput2==0 && minuteInput2==0){
       if(control==false){
        console.log("0000")
        clearInterval(myTimer)
        timer.textContent = `Timer=> Give me anything but 0`;
       }else{
        console.log("done")
        clearInterval(myTimer)
        timer.textContent = `Timer=> done`;
       }


    }
    else if(secondInput2==0){
        timer.textContent = `Timer=>  ${minuteInput2} : ${secondInput2} `;
        minuteInput2--;
        secondInput2=59
        console.log("1")
        e.stopPropagation()

    }
   else{
        timer.textContent = `Timer=>  ${minuteInput2} : ${secondInput2--} `;
        console.log("3")
    }

    
    
    }, 1000);


    
    reset.addEventListener("click",()=>{
        clearInterval(myTimer)
        start.disabled=false
        minuteInput.disabled=false
    secondInput.disabled=false
        minuteInput.value=0
        secondInput.value=0
        timer.textContent = `Timer=>`;
    })
   
   

})


