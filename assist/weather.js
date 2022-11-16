const cityName=document.querySelector("#cityName");
const temp=document.querySelector("#temp");
const maxTemp=document.querySelector("#maxTemp");
const minTemp=document.querySelector("#minTemp");

async function getResult(){
    let city = document.querySelector("#inputCity").value;
    let key="72822df25b09ca945c52be0282ac1bbc";
    let url =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    let data=await url.json();
     
    console.log(data)
    
    let CITYNAME=data.name;
    let TEMP=data.main.temp;
    let TEMPMAX=data.main.temp_max;
    let TEMPMIN=data.main.temp_min;
   
    
    cityName.innerHTML = CITYNAME;
    temp.innerHTML=TEMP +"°C";
    maxTemp.innerHTML=TEMPMAX +"°C";
    minTemp.innerHTML=TEMPMIN +"°C";
    

}