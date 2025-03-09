This is a personal weather/todo list app. 
It uses weather API to fetch its data depending on user's current geolocation.
The website pops up the question asking permission to use geo location data on DOMCONTENTLOADED event.
So it's depends on user to allow or reject it.
The second main purpose of this app is to do list.


It contains main html/js files for the main page. Also there are html/js files for weather page. They share one css file. 

Main HTML file:
It contains 4 divisions. The first one is mainly a greeting type of message.
Then comes the div with the current day of the week and current date.
The third div tag uses Meteo API, which fetches the current outdoor temperature along with the icon of weather condition.
In the bottom right corner, there is a link 'see more' which takes you to the second html file.
And on the bottom there is a To Do list block. Which allows you to add your personal errands. It comes with check/uncheck button. And delete button. Once it's checked, it crosses out the input message. 
All data input and its adjustments are saved in the local storage automatically. 


Weather HTML file:
As I mentioned earlier, there is a link 'see more' which takes you to the the second page. It has it's own js file since it triggers dom content independently from the main dom.
There you can find 3 sections with weather forecast for 3 days, including today. It uses a 3 day API. 
Each section has the date, minimum and maximum temperatures and weather condition icon.
In the bottom left corner, you can find 'go back' link, which takes you back to the main page.
