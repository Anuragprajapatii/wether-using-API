const apiKey ="3d15dc6e6cb431fc73cb07b823942a58";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const input= document.querySelector()

const Searchbar = document.querySelector(".search input");
const Searchbtn = document.querySelector(".icon i");
const weatherIcon = document.querySelector(".weather-type img")

async function CheckWeather(city){
  const response= await fetch(apiURL + city + `&appid=${apiKey}`);
  var data= await response.json();
  console.log(data);

  console.log(data.weather[0].main) 
document.querySelector(".city").innerHTML= data.name ;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".speed").innerHTML= data.wind.speed + " Km/h";
// document.querySelector(".humidity").innerHTML= data.main.humidity + "%";


if(data.weather[0].main == "Clouds"){
   weatherIcon.src="image/cloudy.png"
}
else 
if(data.weather[0].main == "Clear"){
   weatherIcon.src="image/sun.png"
}


else if(data.weather[0].main == "Drizzle"){
  weatherIcon.src="image/storm.png"
}

else if(data.weather[0].main == "Rain"){
  weatherIcon.src="image/storm (1).png"
}

}
Searchbtn.addEventListener("click",() => {
  

CheckWeather(Searchbar.value);})

const d = new Date();
let time = d.getHours() +":" + d.getMinutes();

console.log(d)