// make a whether API request and then display data on webpage. Also design the UI.
let longitude = document.getElementById("longitude");
let latitude = document.getElementById("latitude");
let elevation = document.getElementById("elevation");
let whetherData = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
whetherData.then((res) => {
    return res.json()
}).then((whether) => {
//    console.log(whether);
longitude.innerHTML = `${whether.longitude}`
latitude.innerHTML = `${whether.latitude}`
elevation.innerHTML = `${whether.elevation}`
}).catch((err) => {
    console.log(err);
    
})