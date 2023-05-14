let country
let condition
let humid
let temp
let test
let windDirection
let speed
const submit = document.getElementById("submit")

function anotherCheck(data) {
    let value

    if(data === "N") {
        value = "North"
    } else if (data === "W") {
        value = "West"
    } else if (data === "S") {
        value =  "South"
    } else if (data === "E") {
        value = "East"
    } else {
        return ""
    }

    return value
}

function check(windDir) {
    let returnValue = ""
    if(windDir.length != 1) {
        windDir = windDir.split('')
        for(let i = 0; i < windDir.length; i++) {
            returnValue += anotherCheck(windDir[i])
        }
    } else {
        returnValue = anotherCheck(windDir)
    }
    return returnValue
}

async function getWeather(city) {
    try {
        let weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=eb15756c1a7c4a7c94d160254230805&q=${city}`)
        weather = await weather.json()
        let conditionText = weather.current.condition.text
        let windDir = weather.current.wind_dir
        // let windDir = "WE"
        let windMph = weather.current.wind_mph
        let windKph = weather.current.wind_kph
        let humidity = "Humidity: " + weather.current.humidity
        let tempC = weather.current.temp_c
        let tempF = weather.current.temp_f
        let location = "Country: " + weather.location.country
        country.textContent = location
        condition.textContent = conditionText
        windDirection.textContent = `Wind Direction: ${check(windDir)}`
        speed.textContent = `Wind Speed: ${windMph}Mph/${windKph}Kph`
        humid.textContent = humidity
        temp.textContent = `Temprature: ${tempC}${test}C/${tempF}${test}F` 
        console.log(weather)
    } catch (error) {
        alert("Invalid Input")
    }

}

submit.addEventListener("click", function() {
    let input = document.getElementById('city').value
    country = document.getElementById("country")
    condition = document.getElementById("condition")
    windDirection = document.getElementById("wind-direction")
    speed = document.getElementById("speed")
    humid = document.getElementById("humidity")
    temp = document.getElementById("temp")
    test = document.getElementById("test").textContent
    getWeather(input)
})