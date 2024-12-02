const nameCity = document.querySelector("#name-city")
const cities = document.querySelector("#city");
const temperature = document.getElementById("temp");
const description =document.getElementById("descript");
const form = document.querySelector("#form");
const keyApi = "949957f0c414e35a0c834129b1f0172b";

let mycity = 0;

const getData = () => {
    
    mycity = nameCity.value;
    cities.textContent = mycity;

    //récupère la nouvelle meteo

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mycity}&appid=${keyApi}&units=metric&lang=fr`)
                .then(resultat => resultat.json())
                .then(resp => {
                    const temp = resp.main.temp;
                    const tempRounded = Math.round(temp)
                    const descript = resp.weather[0].description
                    console.log(descript)
                    temperature.textContent = tempRounded +"°"
                    description.textContent = descript
                })
    console.log(mycity)
}

function meteo(){
    
    //récupère l'adresse ip
    console.log(cities)

    fetch("https://api.ipify.org?format=json")
    .then(resultat => resultat.json())
    .then(resp => {
        const ip = resp.ip;
        console.log(ip)

    //récupère la geo avec l'ip

            fetch(`https://api.ipstack.com/${ip}?access_key=670305812e640a975b6b2f36e3b8403e`)
            .then(resultat => resultat.json())
            .then(city => {

                mycity = city.city
                cities.textContent = mycity

    // récupère la meteo 

                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mycity}&appid=${keyApi}&units=metric&lang=fr`)
                .then(resultat => resultat.json())
                .then(resp => {
                    const temp = resp.main.temp;
                    const tempRounded = Math.round(temp)
                    const descript = resp.weather[0].description
                    console.log(descript)
                    temperature.textContent = tempRounded +"°"
                    description.textContent = descript
                })
            }
        )

        

        }
    )
   
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
    
}


meteo()






