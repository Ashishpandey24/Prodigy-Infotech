const userlocation =document.getElementById("userlocation");
converter =document.getElementById("converter");
weatherIcon =document.querySelector(".weatherIcon");
temperature =document.querySelector(".temperature");
feelsLike =document.querySelector(".feelsLike");
description=document.querySelector(".description");
date =document.querySelector(".date");
city=document.querySelector(".city");

HValue =document.getElementById("HValue");
WValue =document.getElementById("WValue");
SRValue =document.getElementById("SRValue");
SSValue =document.getElementById("SSValue");
CValue =document.getElementById("CValue");
UVValue =document.getElementById("UVValue");
PValue =document.getElementById("PValue");

Forecast =document.querySelector(".Forecast");
WEATHER_API_ENDPOINT=`https://api.openweathermap.org/data/2.5/weather?appid=a5bb4718b30b6f58f58697997567fffa&q=`
WEATHER_DATA_ENDPOINT=`https://api.openweathermap.org/data/2.5/onecall?appid=a5bb4718b30b6f58f58697997567fffa&exclude=minutely&units=metric&`
function finduserlocation(){
   fetch(WEATHER_API_ENDPOINT+userlocation.value).then((response)=>response.json()).then((data)=>{
  if(data.cod!="" && data.cod !=200){
    alert(data.message);
    return;
  }
  fetch(
    WEATHER_DATA_ENDPOINT+`lon=${data.coord.lon}&lat=${data.coord.lat}`
)
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
});
   });

   
}