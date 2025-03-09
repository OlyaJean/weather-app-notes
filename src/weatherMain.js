import './style.css'

async function getWeatherData(lat,lon){
   
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FNew_York&forecast_days=3`;
    
    const promise = await fetch(apiUrl);
    const promiseJson = await promise.json();
    console.log(promiseJson)
    return promiseJson;
    };


const today = document.querySelector('.today');
const tomorrow = document.querySelector('.tomorrow');
const afterTom = document.querySelector('.afterTom');
const secondWeatherBlock = document.querySelector('.secondWeatherBlock');


document.addEventListener('DOMContentLoaded',async ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation,declinedLocation)
  });

  async function gotLocation(position){
    const result = await getWeatherData(position.coords.latitude, position.coords.longitude) ;

    //Today's weather
    const dateP1 = document.createElement('p');
    const date1 = result.daily.time[0];
    dateP1.textContent = date1;
    today.appendChild(dateP1);

    //Min Temp
    const minP1 = document.createElement('p');
    const min1 = result.daily.temperature_2m_min
    [0];
    minP1.textContent =`Minimum temperature: ${min1}° F`;
    today.appendChild(minP1);

    //Max Temp
    const maxP1 = document.createElement('p');
    const max1 = result.daily.temperature_2m_max
    [0];
    maxP1.textContent =`Maximum temperature: ${max1}° F`;
    today.appendChild(maxP1);


    const cond = document.createElement('img');
    cond.classList.add('iconStyle');
    const outdoorCondition = result.daily.weather_code[0];

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
      today.appendChild(cond);



      //Tomorrow's weather
      const dateP2 = document.createElement('p');
      const date2 = result.daily.time[1];
      dateP2.textContent = date2;
      tomorrow.appendChild(dateP2);
  
      //Min Temp
      const minP2 = document.createElement('p');
      const min2 = result.daily.temperature_2m_min
      [1];
      minP2.textContent =`Minimum temperature: ${min2}° F`;
      tomorrow.appendChild(minP2);
  
      //Max Temp
      const maxP2 = document.createElement('p');
      const max2 = result.daily.temperature_2m_max[1];
      maxP2.textContent =`Maximum temperature: ${max2}° F`;
      tomorrow.appendChild(maxP2);
  
  
      const cond2 = document.createElement('img');
      cond2.classList.add('iconStyle');
      const outdoorCondition2 = result.daily.weather_code[1];
  
      switch(true){
    
          case(outdoorCondition2 === 0 ):  cond2.src = `./sunny.png`;
          
          break;
          case(outdoorCondition2 >= 1 && outdoorCondition2 <= 3):  cond2.src = `./partlyCloudy.png`;
          
          break;
          case(outdoorCondition2 >= 45 && outdoorCondition2 < 51):  cond2.src = `./mist.png`;
          
          break;
          case(outdoorCondition2 >= 51 && outdoorCondition2 < 71):  cond2.src = `./rain.png`;
       
          break;
          case(outdoorCondition2 >= 71 && outdoorCondition2 < 95):  cond2.src = `./cloudySnow.png`;
          
          break;
          case (outdoorCondition2 >= 95 ):  cond2.src = `./thunder.png`;
          
          break;
          default: cond2.src = `./cloud.png`;
        
        }
        tomorrow.appendChild(cond2);


        //After Tomorrow's Weather

        const dateP3 = document.createElement('p');
        const date3 = result.daily.time[2];
        dateP3.textContent = date3;
        afterTom.appendChild(dateP3);
    
        //Min Temp
        const minP3 = document.createElement('p');
        const min3 = result.daily.temperature_2m_min
        [2];
        minP3.textContent =`Minimum temperature: ${min3}° F`;
        afterTom.appendChild(minP3);
    
        //Max Temp
        const maxP3 = document.createElement('p');
        const max3 = result.daily.temperature_2m_max[2];
        maxP3.textContent =`Maximum temperature: ${max3}° F`;
        afterTom.appendChild(maxP3);
    
    
        const cond3 = document.createElement('img');
        cond3.classList.add('iconStyle');
        const outdoorCondition3 = result.daily.weather_code[2];
    
        switch(true){
      
            case(outdoorCondition3 === 0 ):  cond3.src = `./sunny.png`;
            
            break;
            case(outdoorCondition3 >= 1 && outdoorCondition3 <= 3):  cond3.src = `./partlyCloudy.png`;
            
            break;
            case(outdoorCondition3 >= 45 && outdoorCondition3 < 51):  cond3.src = `./mist.png`;
            
            break;
            case(outdoorCondition3 >= 51 && outdoorCondition3 < 71):  cond3.src = `./rain.png`;
         
            break;
            case(outdoorCondition3 >= 71 && outdoorCondition3 < 95):  cond3.src = `./cloudySnow.png`;
            
            break;
            case (outdoorCondition3 >= 95 ):  cond3.src = `./thunder.png`;
            
            break;
            default: cond3.src = `./cloud.png`;
          
          }
          afterTom.appendChild(cond3);

  };

  function declinedLocation(){
    const decline = document.createElement('span');
  
    decline.textContent = `Problem to retrive data`
  secondWeatherBlock.appendChild(decline);
  }