var request = new XMLHttpRequest();
var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
document.querySelector('.date').innerHTML = d.getDate() + ' ' + n +', '+ d.getFullYear();


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener("keypress", setKey);
function setKey(key){
    if (key.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

    document.querySelector('.button').onclick = function showResult() {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }


function getResults(cityName) {
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&units=metric&APPID=d99adf2567f4cb6e8af0b5b4af4262ff');
    request.send();
    request.onload = function(){
        var response = request.response;
        var parsedData = JSON.parse(response);
        console.log(parsedData);
        var city = document.querySelector('.city');
        city.innerText = parsedData.name + ', ' + parsedData.sys.country;
        var temp = document.querySelector('.temp');
        temp.innerText =parsedData.main.temp + "°C";
        var description = document.querySelector('.weather');
        description.innerText = parsedData.weather[0].description;
        var tempMaxMin = document.querySelector('.hi-low');
        tempMaxMin.innerText = "Temp Max: "+ parsedData.main.temp_max + "°C" + " - " +"Temp Min: "+ parsedData.main.temp_min+ "°C";
        var icon = parsedData.weather[0].icon;
        var imageURL = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
        var images = document.querySelector('.icon');
        images.setAttribute('src', imageURL);
        
    }
}


