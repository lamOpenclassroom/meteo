const nameCity = document.querySelector("#name-city")
const cities = document.querySelector("#city");
const temperature = document.getElementById("temp");
const description =document.getElementById("descript");
const form = document.querySelector("#form");
const keyApi = "949957f0c414e35a0c834129b1f0172b";
const keyGeo = "cd627d9a6db94b8394ed32bf45047489";
const icon = document.getElementById("icone");
let body = document.body;
let mycity = 0;
let codeIcone = 0;
let cls = ["ciel-clair", "quelques-nuages", "nuages-epars", "nuages-​​​​brises", "averse", "pluie", "neige", "orage", "brume"];

const changeBackground = () => {
    switch (codeIcone) {
        case '01d' || '01n':
            body.classList.remove(...cls);
            body.classList.add("ciel-clair");
            break;
        case '02d' || '02n':
            body.classList.remove(...cls);
            body.classList.add("quelques-nuages");
            break;
        case '03d' || '03n':
            body.classList.remove(...cls);
            body.classList.add("nuages-epars");
            break;
        case '04d' || '04n':
            body.classList.remove(...cls);
            body.classList.add("nuages-​​​​brises");
            break;
        case '09d' || '09n':
            body.classList.remove(...cls);
            body.classList.add("averse");
            break;
        case '10d' || '10n':
            body.classList.remove(...cls);
            body.classList.add("pluie");
            break;
        case '11d' || '11n':
            body.classList.remove(...cls);
            body.classList.add("neige");
            break;
        case '13d' || '13n':
            body.classList.remove(...cls);
            body.classList.add("orage");
            break;
        case '50d' || '50n':
            body.classList.remove(...cls);
            body.classList.add("brume");
            break;
        default:
            null
    }
}


const clickCity = ()  => {
        
    if(form.className === "hidden"){
        form.classList.remove("hidden") &
        form.classList.add("visible")
    }else{
        form.classList.remove("visible") &
        form.classList.add("hidden")
        
    }
    
}

cities.addEventListener("click", clickCity)


async function getData () {
    mycity = nameCity.value;
    cities.textContent = mycity;

    //récupère la nouvelle meteo

    const meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mycity}&appid=${keyApi}&units=metric&lang=fr`)
            .then(resultat => resultat.json())
            .then(weather => weather)
                
        const temp = meteo.main.temp;
        const tempRounded = Math.round(temp)
        const descript = meteo.weather[0].description
        codeIcone = meteo.weather[0].icon
        temperature.textContent = tempRounded +"°"
        description.textContent = descript
        icon.src = `https://openweathermap.org/img/wn/${codeIcone}@2x.png`;
        changeBackground()
}


async function meteo(){

    //récupère l'adresse ip
    const ip = await fetch("https://api.ipify.org?format=json")
        .then(resultat => resultat.json())
        .then(resp => resp.ip)
    //récupère la geo avec l'ip

    const city = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${keyGeo}&ip_address=${ip}`)
        .then(resultat => resultat.json())
        .then(city => city.city)
    // récupère la meteo 

    const meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric&lang=fr`)
                .then(resultat => resultat.json())
                .then(weather => weather)
          
    cities.textContent = meteo.name
    const temp = meteo.main.temp;
    const tempRounded = Math.round(temp)
    const descript = meteo.weather[0].description
    codeIcone = meteo.weather[0].icon
    temperature.textContent = tempRounded +"°"
    description.textContent = descript
    icon.src = `https://openweathermap.org/img/wn/${codeIcone}@2x.png`;

    changeBackground()
    
}
meteo()






