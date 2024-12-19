const nameCity = document.querySelector("#name-city")
const cities = document.querySelector("#city");
const temperature = document.getElementById("temp");
const description =document.getElementById("descript");
const form = document.querySelector("#form");
const keyApi = "949957f0c414e35a0c834129b1f0172b";
// const keyGeo = "cd627d9a6db94b8394ed32bf45047489";
const keyGeoNew = "4035e22eb036bb"
const icon = document.getElementById("icone");
const title = document.getElementById('title');
const bulle = document.getElementById("message");
const blocMeteo = document.getElementById("bloc-meteo")

const englishLang = document.getElementById("langage-en");
const franceLang = document.getElementById("langage-fr");
const spanishLang = document.getElementById("langage-sp");

let lang = "fr";
let body = document.body;
let mycity = 0;
let codeIcone = 0;
let cls = ["ciel-clair", "quelques-nuages", "nuages-epars", "nuages-​​​​brises", "averse", "pluie", "neige", "orage", "brume","clear-color","dark-color"];

const descriptList = {
    clear: ["Ciel clair","Cielo despejado","Clear"],
    someClouds: ["Quelques nuages","Algunas nubes","Some clouds"],
    scatteredClouds: ["Nuages ​​épars","Nubes dispersas","Scattered clouds"],
    brokenClouds: ["Nuages ​​​​brisés","Nubes rotas","Broken clouds"],
    rainShowers: ["Averse","Ducha", "Rain showers"],
    rain: ["Pluie","Lluvia", "Rain"],
    thunderstorm: ["Orage","Tormenta","Thunder storm"],
    snow: ["Neige","Nieve","Snow"],
    mist: ["Brume","Niebla","Mist"]
}

title.textContent = "METEO";
    bulle.textContent = "Clic pour changer de ville";
    franceLang.classList.add("select");

const changeBackground = () => {
    body.classList.remove(...cls)
    blocMeteo.classList.remove("back-filter")
    switch (codeIcone) {
        case '01d':
        case '01n':
            body.classList.add("dark-color");
            body.classList.add("ciel-clair");
            break;
        case '02d':
        case '02n':
            body.classList.add("dark-color");
            body.classList.add("quelques-nuages");
            break;
        case '03d':
        case '03n':
            body.classList.add("dark-color");
            body.classList.add("nuages-epars");
            break;
        case '04d':
        case '04n':
            body.classList.add("dark-color");
            body.classList.add("nuages-​​​​brises");
            break;
        case '09d':
        case '09n':
            body.classList.add("clear-color");
            body.classList.add("averse");
            break;
        case '10d':
        case '10n':
            body.classList.add("clear-color");
            body.classList.add("pluie");
            break;
        case '11d':
        case '11n':
            body.classList.add("dark-color");
            body.classList.add("neige");
            break;
        case '13d':
        case '13n':
            body.classList.add("clear-color");
            body.classList.add("orage");
            break;
        case '50d':
        case '50n':
            body.classList.add("dark-color");
            body.classList.add("brume");
            blocMeteo.classList.add("back-filter")
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

const deletClass = () =>{
    if(lang == "en"){
        englishLang.classList.add("select")
        franceLang.classList.remove("select")
        spanishLang.classList.remove("select")
    }else if (lang == "sp"){
        spanishLang.classList.add("select")
        franceLang.classList.remove("select")
        englishLang.classList.remove("select")
    }else if (lang == "fr"){
        franceLang.classList.add("select")
        spanishLang.classList.remove("select")
        englishLang.classList.remove("select")
    }
}

const clicEn = () => {
    lang = "en";
    deletClass(lang)
    changLang()
}

const clicSp = () => {
    lang = "sp";
    deletClass(lang)
    changLang()
}

const clicFr = () => {
    lang = "fr";
    deletClass(lang)
    changLang()
}

const changLang = () => {
    if (lang == "fr") {
        title.textContent = "METEO";
        bulle.textContent = "Clic pour changer de ville"
        switch (codeIcone) {
            case '01d':
            case '01n':
                description.textContent = descriptList.clear[0];
                break;
            case '02d':
            case '02n':
                description.textContent = descriptList.someClouds[0];
                break;
            case '03d':
            case '03n':
                description.textContent = descriptList.scatteredClouds[0];
                break;
            case '04d':
            case '04n':
                description.textContent = descriptList.brokenClouds[0];
                break;
            case '09d':
            case '09n':
                description.textContent = descriptList.rainShowers[0];
                break;
            case '10d':
            case '10n':
                description.textContent = descriptList.rain[0];
                break;
            case '11d':
            case '11n':
                description.textContent = descriptList.snow[0];
                break;
            case '13d':
            case '13n':
                description.textContent = descriptList.thunderstorm[0];
                break;
            case '50d':
            case '50n':
                description.textContent = descriptList.mist[0];
                break;
            default:
                null
        }
    } else if (lang == "sp") {
        title.textContent = "TIEMPO";
        bulle.textContent = "Clic para cambiar de ciudad"
        switch (codeIcone) {
            case '01d':
            case '01n':
                description.textContent = descriptList.clear[1];
                break;
            case '02d':
            case '02n':
                description.textContent = descriptList.someClouds[1];
                break;
            case '03d':
            case '03n':
                description.textContent = descriptList.scatteredClouds[1];
                break;
            case '04d':
            case '04n':
                description.textContent = descriptList.brokenClouds[1];
                break;
            case '09d':
            case '09n':
                description.textContent = descriptList.rainShowers[1];
                break;
            case '10d':
            case '10n':
                description.textContent = descriptList.rain[1];
                break;
            case '11d':
            case '11n':
                description.textContent = descriptList.snow[1];
                break;
            case '13d':
            case '13n':
                description.textContent = descriptList.thunderstorm[1];
                break;
            case '50d':
            case '50n':
                description.textContent = descriptList.mist[1];
                break;
            default:
                null
        }   
        } else if (lang == "en") {
            title.textContent = "WEATHER";
            bulle.textContent = "Click to change city"
            switch (codeIcone) {
                case '01d':
                case '01n':
                    description.textContent = descriptList.clear[2];
                    break;
                case '02d':
                case '02n':
                    description.textContent = descriptList.someClouds[2];
                    break;
                case '03d':
                case '03n':
                    description.textContent = descriptList.scatteredClouds[2];
                    break;
                case '04d':
                case '04n':
                    description.textContent = descriptList.brokenClouds[2];
                    break;
                case '09d':
                case '09n':
                    description.textContent = descriptList.rainShowers[2];
                    break;
                case '10d':
                case '10n':
                    description.textContent = descriptList.rain[2];
                    break;
                case '11d':
                case '11n':
                    description.textContent = descriptList.snow[2];
                    break;
                case '13d':
                case '13n':
                    description.textContent = descriptList.thunderstorm[2];
                    break;
                case '50d':
                case '50n':
                    description.textContent = descriptList.mist[2];
                    break;
                default:
                    null
            }
        }
}
    
async function getData () {
    mycity = nameCity.value;
    cities.textContent = mycity;
    //récupère la nouvelle meteo

    const meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mycity}&appid=${keyApi}&units=metric&lang=${lang}`)
        .then(resultat => resultat.json())
        .then(weather => weather)
    
        const temp = meteo.main.temp;
        const tempRounded = Math.round(temp)
        codeIcone = meteo.weather[0].icon
        temperature.textContent = tempRounded +"°"
        changLang()
        icon.src = `https://openweathermap.org/img/wn/${codeIcone}@2x.png`;
        console.log(codeIcone)
        changeBackground()
}


async function meteo(){
    
    //récupère l'adresse ip
    const ip = await fetch("https://api.ipify.org?format=json")
        .then(resultat => resultat.json())
        .then(resp => resp.ip)
        console.log(ip)
    //récupère la geo avec l'ip
    //trouve un autre site de géolocalisation
    // const city = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${keyGeo}&ip_address=${ip}`)
    const city = await fetch(`https://ipinfo.io/${ip}?token=${keyGeoNew}`)
        .then(resultat => resultat.json())
        .then(city => city.city)
    // récupère la meteo 
    console.log(city)
    const meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric&lang=${lang}`)
                .then(resultat => resultat.json())
                .then(weather => weather)
          
    cities.textContent = meteo.name
    const temp = meteo.main.temp;
    const tempRounded = Math.round(temp)
    codeIcone = meteo.weather[0].icon
    temperature.textContent = tempRounded +"°"
    changLang()
    icon.src = `https://openweathermap.org/img/wn/${codeIcone}@2x.png`;
    changeBackground()
}
meteo()









