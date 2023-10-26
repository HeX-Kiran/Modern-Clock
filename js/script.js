let minHand = document.querySelector(".min-hand");
let hrHand = document.querySelector(".hour-hand");
let secHand = document.querySelector(".sec-hand");

let min = 0;
let sec = 0;
let hr = 0;

let isAm = false

setInterval(function(){
    let d = new Date();

     min = 6*d.getMinutes();
     sec = 6*d.getSeconds();
     hr = (30*d.getHours() + Math.round(min/12) );

     isAm = d.getHours() > 12 ? false : true;

     updateInfo(isAm)

    console.log("min = "+d.getMinutes());
    console.log("sec = "+d.getSeconds());
    console.log("hours = "+d.getHours());

    secHand.style.transform = `rotate(${sec-180}deg)`;
    minHand.style.transform = `rotate(${min-180}deg)`;
    hrHand.style.transform = `rotate(${hr-180}deg)`;
},1000)


function updateInfo(isAm){
    let d = new Date();
    if(isAm){
        if(d.getHours() < 6){
            document.querySelector(".wish p").textContent = "GOOD MORNING";
            document.querySelector(".food-type p").textContent = "Too Early to eat";
            document.querySelector(".food-icon").style.display = "none";
        }
        else{
            // Do nothing
        }
        
    }
    else{
        if(d.getHours() < 15){
            document.querySelector(".wish p").textContent = "GOOD AFTERNOON";
            document.querySelector(".food-type p").textContent = "LUNCH";
            // document.querySelector(".food-icon").style.display = "none";
        }
        else if(d.getHours() >15 && d.getHours() <=18){
            document.querySelector(".wish p").textContent = "GOOD EVENING";
            document.querySelector(".food-type p").textContent = "TEA TIME";
            // document.querySelector(".food-icon").style.display = "none";
        }
        else{
            document.querySelector(".wish p").textContent = "GOOD EVENING";
            document.querySelector(".food-type p").textContent = "DINNER";
            // document.querySelector(".food-icon").style.display = "none";
        }
    }
}