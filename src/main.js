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

window.addEventListener('DOMContentLoaded',async ()=>{
  navigator.geolocation.getCurrentPosition(gotLocation,declinedLocation)
})