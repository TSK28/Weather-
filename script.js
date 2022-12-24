const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23a8e72312mshc2103a5ae28a742p1b8f3ejsn7d08ef71ee6b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const defaultWeather = () =>{
	const cityName = ["mumbai","patna","lucknow","kolkata"];
	cityName.map((city) =>{
		console.log(city)
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
		.then(response => response.json())
		.then(response => {
			let cityRow = document.getElementById(city)
            console.log(city,cityRow)
			// console.log(city,response)
            // let citytemp = "temp-"+city;
			// console.log(citytemp)
			let citytemp = document.getElementById("temp-"+city)
			let citysunrise = document.getElementById("sunrise-"+city)
			let citysunset = document.getElementById("sunset-"+city)
			let citymin = document.getElementById("min-"+city)
			let citymax = document.getElementById("max-"+city)
			let citypct = document.getElementById("pct-"+city)
			let cityfeels = document.getElementById("feels-"+city)
			let cityhumidity = document.getElementById("humidity-"+city)
			let citywdegree = document.getElementById("wdegree-"+city)
			let citywspeed = document.getElementById("wspeed-"+city)
			citytemp.innerHTML = response.temp;
			cityfeels.innerHTML = response.feels_like
			cityhumidity.innerHTML = response.humidity
			citypct.innerHTML = response.humidity
			citymin.innerHTML = response.min_temp
			citymax.innerHTML = response.max_temp
			citywspeed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			citywdegree.innerHTML = response.wind_degrees
			citysunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
			citysunset.innerHTML = new Date(response.sunset * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

		})
	.catch(err => console.error(err));
	})

}
const getWeather= (city)=>{
cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {


		console.log(response)


		
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset


	})
	.catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")
defaultWeather();



