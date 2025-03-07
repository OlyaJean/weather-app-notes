import './style.css'

//Calender
const toDay = document.querySelector('.toDay');
const toDate = document.querySelector('.toDate')
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const today = new Date();

window.addEventListener('DOMContentLoaded',()=>{
  toDay.textContent = days[today.getDay()]
  const month = today.toLocaleString('default',{month:'long'})
  toDate.textContent = `${month} ${today.getDate()}, ${today.getFullYear()}`
})

//Weather
const myTemp = document.querySelector('.temperature')
const weatherCondition = document.querySelector(".condition");



//fetching weather
async function getWeatherData(lat,lon){
   
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`;

const promise = await fetch(apiUrl);
const promiseJson = await promise.json();
console.log(promiseJson)
return promiseJson;
}

//geolocation question popup
window.addEventListener('DOMContentLoaded',async ()=>{
  navigator.geolocation.getCurrentPosition(gotLocation,declinedLocation)
});

async function gotLocation(position){
  const result = await getWeatherData(position.coords.latitude, position.coords.longitude) 
   
   const approve = document.createElement('span');
   const farenhTemp = ((result.current.temperature_2m * 9/5) + 32).toFixed(0);
 
  approve.textContent = `${farenhTemp}° F`;
  myTemp.appendChild(approve);

  const cond = document.createElement('img');
  cond.classList.add('iconStyle');

  const outdoorCondition = result.current.weather_code;
  
  
 switch(true){
  
   case(outdoorCondition === 0 ):  cond.src = `./public/sunny.png`;
   
   break;
   case(outdoorCondition >= 1 && outdoorCondition <= 3):  cond.src = `./public/partlyCloudy.png`;
   
   break;
   case(outdoorCondition >= 45 && outdoorCondition < 51):  cond.src = `./public/mist.png`;
   
   break;
   case(outdoorCondition >= 51 && outdoorCondition < 71):  cond.src = `./public/rain.png`;

   break;
   case(outdoorCondition >= 71 && outdoorCondition < 95):  cond.src = `./public/cloudySnow.png`;
   
   break;
   case (outdoorCondition >= 95 ):  cond.src = `./public/thunder.png`;
   
   break;
   default: cond.src = `./public/cloud.png`;
 
 }
 weatherCondition.appendChild(cond);
};




function declinedLocation(){
  const decline = document.createElement('span');

  decline.textContent = `Problem to retrive data`
  myTemp.appendChild(decline)
}
