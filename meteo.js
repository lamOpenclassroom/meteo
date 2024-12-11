const nameCity = document.querySelector("#name-city")
const cities = document.querySelector("#city");
const temperature = document.getElementById("temp");
const description =document.getElementById("descript");
const form = document.querySelector("#form");
const keyApi = "949957f0c414e35a0c834129b1f0172b";
const keyGeo = "cd627d9a6db94b8394ed32bf45047489";
const icon = document.getElementById("icone");

const englishLang = document.getElementById("langage-en");
const franceLang = document.getElementById("langage-fr");
const spanishLang = document.getElementById("langage-sp");
let lang = "fr";

let body = document.body;
let mycity = 0;
let codeIcone = 0;
let cls = ["ciel-clair", "quelques-nuages", "nuages-epars", "nuages-​​​​brises", "averse", "pluie", "neige", "orage", "brume"];

const changeBackground = () => {
    body.classList.remove(...cls)
    switch (codeIcone) {
        case '01d':
        case '01n':
            body.classList.add("ciel-clair");
            break;
        case '02d':
        case '02n':
            body.classList.add("quelques-nuages");
            break;
        case '03d':
        case '03n':
            body.classList.add("nuages-epars");
            break;
        case '04d':
        case '04n':
            body.classList.add("nuages-​​​​brises");
            break;
        case '09d':
        case '09n':
            body.classList.add("averse");
            break;
        case '10d':
        case '10n':
            body.classList.add("pluie");
            break;
        case '11d':
        case '11n':
            body.classList.add("neige");
            break;
        case '13d':
        case '13n':
            body.classList.add("orage");
            break;
        case '50d':
        case '50n':
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
    console.log(englishLang)
}

const clicSp = () => {
    lang = "sp";
    deletClass(lang)
    console.log(spanishLang)
}

const clicFr = () => {
    lang = "fr";
    deletClass(lang)
    console.log(franceLang)
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
        const descript = meteo.weather[0].description
        codeIcone = meteo.weather[0].icon
        temperature.textContent = tempRounded +"°"
        description.textContent = descript
        icon.src = `https://openweathermap.org/img/wn/${codeIcone}@2x.png`;
        console.log(codeIcone)
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

    const meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric&lang=${lang}`)
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







