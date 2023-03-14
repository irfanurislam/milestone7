// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_key = `c000b17eb3b8f7f035665853325cd22d`;


const loadweather = city  => {
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const displayTemperature = data =>{
    /* const tempreture = document.getElementById('temprature');
    tempreture.innerText= data.data.main; */
    innnset('temprature',data.data.main);
    innnset('condition',temperature.weather[0].main);
    
}

document.getElementById('btn-search').addEventListener('click',function(){
    const serach = document.getElementById('search-feild');
    const city = serach.value;
    // city
    document.getElementById('cityname').innerText = city;
    loadweather(city);
})


const innnset = (id,value) =>{
    const tempo = document.getElementById(id);
    tempo.innerText = value;
}

loadweather();

// api keys problem but its okk so 
// didnot authorized me