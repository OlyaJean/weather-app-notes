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
  
   case(outdoorCondition === 0 ):  cond.src = `./sunny.png`;
   
   break;
   case(outdoorCondition >= 1 && outdoorCondition <= 3):  cond.src = `./partlyCloudy.png`;
   
   break;
   case(outdoorCondition >= 45 && outdoorCondition < 51):  cond.src = `./mist.png`;
   
   break;
   case(outdoorCondition >= 51 && outdoorCondition < 71):  cond.src = `./rain.png`;

   break;
   case(outdoorCondition >= 71 && outdoorCondition < 95):  cond.src = `./cloudySnow.png`;
   
   break;
   case (outdoorCondition >= 95 ):  cond.src = `./thunder.png`;
   
   break;
   default: cond.src = `./cloud.png`;
 
 }
 weatherCondition.appendChild(cond);
};




function declinedLocation(){
  const decline = document.createElement('span');

  decline.textContent = `Problem to retrive data`
  myTemp.appendChild(decline)
}


//Todo section

const todoDiv = document.querySelector(".todo");
const sectionToDo = document.querySelector('.sectionToDo');
const addButton = document.querySelector('.addItem');

//Local Storage
function showNotes(){
  sectionToDo.innerHTML = localStorage.getItem('notes')
};
showNotes();

function updateStorage(){
   localStorage.setItem('notes',sectionToDo.innerHTML)
}


addButton.addEventListener('click', function(){
  const listDiv = document.createElement('div');
  const list = document.createElement('p');
  const checkBtn = document.createElement('img');
  const delBtn = document.createElement('img');

  checkBtn.classList.add('checkBtn');
 checkBtn.src = './uncheck.png';

 delBtn.src = './delete.png';
  delBtn.classList.add('delBtn');

  list.classList.add('todoList');
  list.setAttribute('contenteditable','true');


  listDiv.classList.add('listSection');
  listDiv.appendChild(checkBtn);
  listDiv.appendChild(list);
  listDiv.appendChild(delBtn);

 sectionToDo.appendChild(listDiv);
  todoDiv.appendChild(sectionToDo);
 
  updateStorage();
 });

//check buttons
 const checkButtons = document.querySelectorAll('.checkBtn');
 console.log(checkButtons);

 //delete note and save <p> input on key up

 todoDiv.addEventListener('click',(e)=>{
  if(e.target.classList == "delBtn"){
  e.target.parentElement.remove();
  updateStorage();
  }else if(e.target.classList == 'todoList'){
   e = document.querySelectorAll('.todoList');
  
   e.forEach(element => { element.onkeyup = function(){
       updateStorage();
   }
       
   });
  }
  
})
