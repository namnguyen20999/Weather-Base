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
    // Current Weather
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


    // Forecasted weather in the next few hours
    request.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q='+ cityName +'&units=metric&APPID=d99adf2567f4cb6e8af0b5b4af4262ff');
    request.send();
    request.onload = function(){
        var futResponse = request.response;
        var dataParsed = JSON.parse(futResponse);
        console.log(dataParsed);
        //18:00:00
        var hour1800 = document.querySelector('._1800');
        hour1800.innerText = dataParsed.list[1].dt_txt;
        var miniStatus = document.querySelector('.miniStatus1800');
        miniStatus.innerText = dataParsed.list[1].weather[0].main;
        var status1800 = document.querySelector('._1800img');
        var status = dataParsed.list[1].weather[0].icon;
        var iconURL = 'https://openweathermap.org/img/wn/' + status + '.png';
        status1800.setAttribute('src', iconURL);
        var fTemp = document.querySelector('.fTemp1800');
        fTemp.innerText = dataParsed.list[1].main.temp + '°C';

        //21:00:00
        var hour1800 = document.querySelector('._2100');
        hour1800.innerText = dataParsed.list[2].dt_txt;
        var miniStatus = document.querySelector('.miniStatus2100');
        miniStatus.innerText = dataParsed.list[2].weather[0].main;
        var status1800 = document.querySelector('._2100img');
        var status = dataParsed.list[2].weather[0].icon;
        var iconURL = 'https://openweathermap.org/img/wn/' + status + '.png';
        status1800.setAttribute('src', iconURL);
        var fTemp = document.querySelector('.fTemp2100');
        fTemp.innerText = dataParsed.list[2].main.temp + '°C';

        //00:00:00
        var hour1800 = document.querySelector('._0000');
        hour1800.innerText = dataParsed.list[3].dt_txt;
        var miniStatus = document.querySelector('.miniStatus0000');
        miniStatus.innerText = dataParsed.list[3].weather[0].main;
        var status0000 = document.querySelector('._0000img');
        var status = dataParsed.list[3].weather[0].icon;
        var iconURL = 'https://openweathermap.org/img/wn/' + status + '.png';
        status0000.setAttribute('src', iconURL);
        var fTemp = document.querySelector('.fTemp0000');
        fTemp.innerText = dataParsed.list[3].main.temp + '°C';

        //03:00:00
        var hour1800 = document.querySelector('._0300');
        hour1800.innerText = dataParsed.list[4].dt_txt;
        var miniStatus = document.querySelector('.miniStatus0300');
        miniStatus.innerText = dataParsed.list[4].weather[0].main;
        var status0000 = document.querySelector('._0300img');
        var status = dataParsed.list[4].weather[0].icon;
        var iconURL = 'https://openweathermap.org/img/wn/' + status + '.png';
        status0000.setAttribute('src', iconURL);
        var fTemp = document.querySelector('.fTemp0300');
        fTemp.innerText = dataParsed.list[4].main.temp + '°C';

        //06:00:00
        var hour1800 = document.querySelector('._0600');
        hour1800.innerText = dataParsed.list[5].dt_txt;
        var miniStatus = document.querySelector('.miniStatus0600');
        miniStatus.innerText = dataParsed.list[5].weather[0].main;
        var status0000 = document.querySelector('._0600img');
        var status = dataParsed.list[5].weather[0].icon;
        var iconURL = 'https://openweathermap.org/img/wn/' + status + '.png';
        status0000.setAttribute('src', iconURL);
        var fTemp = document.querySelector('.fTemp0600');
        fTemp.innerText = dataParsed.list[5].main.temp + '°C';

        //09:00:00
        var hour1800 = document.querySelector('._0900');
        hour1800.innerText = dataParsed.list[6].dt_txt;
        var miniStatus = document.querySelector('.miniStatus0900');
        miniStatus.innerText = dataParsed.list[6].weather[0].main;
        var status0000 = document.querySelector('._0900img');
        var status = dataParsed.list[6].weather[0].icon;
        var iconURL = 'https://openweathermap.org/img/wn/' + status + '.png';
        status0000.setAttribute('src', iconURL);
        var fTemp = document.querySelector('.fTemp0900');
        fTemp.innerText = dataParsed.list[6].main.temp + '°C';
        
        //12:00:00
        var hour1800 = document.querySelector('._1200');
        hour1800.innerText = dataParsed.list[7].dt_txt;
        var miniStatus = document.querySelector('.miniStatus1200');
        miniStatus.innerText = dataParsed.list[7].weather[0].main;
        var status0000 = document.querySelector('._1200img');
        var status = dataParsed.list[7].weather[0].icon;
        var iconURL = 'https://openweathermap.org/img/wn/' + status + '.png';
        status0000.setAttribute('src', iconURL);
        var fTemp = document.querySelector('.fTemp1200');
        fTemp.innerText = dataParsed.list[7].main.temp + '°C';

        //15:00:00
        var hour1800 = document.querySelector('._1500');
        hour1800.innerText = dataParsed.list[8].dt_txt;
        var miniStatus = document.querySelector('.miniStatus1500');
        miniStatus.innerText = dataParsed.list[8].weather[0].main;
        var status0000 = document.querySelector('._1500img');
        var status = dataParsed.list[8].weather[0].icon;
        var iconURL = 'https://openweathermap.org/img/wn/' + status + '.png';
        status0000.setAttribute('src', iconURL);
        var fTemp = document.querySelector('.fTemp1500');
        fTemp.innerText = dataParsed.list[8].main.temp + '°C';



        //Forecast weather in the next 5 days
        
        //Day-1
        var day1 = document.querySelector('._5Days1');
        day1.innerText = dataParsed.list[3].dt_txt;
        var temp1 = document.querySelector('._5Temps1');
        temp1.innerText = dataParsed.list[3].main.temp + '°C';

        //Day-2
        var day1 = document.querySelector('._5Days2');
        day1.innerText = dataParsed.list[11].dt_txt;
        var temp1 = document.querySelector('._5Temps2');
        temp1.innerText = dataParsed.list[11].main.temp + '°C';

        //Day-3
        var day1 = document.querySelector('._5Days3');
        day1.innerText = dataParsed.list[19].dt_txt;
        var temp1 = document.querySelector('._5Temps3');
        temp1.innerText = dataParsed.list[19].main.temp + '°C';

        //Day-4
        var day1 = document.querySelector('._5Days4');
        day1.innerText = dataParsed.list[27].dt_txt;
        var temp1 = document.querySelector('._5Temps4');
        temp1.innerText = dataParsed.list[27].main.temp + '°C';

        //Day-5
        var day1 = document.querySelector('._5Days5');
        day1.innerText = dataParsed.list[35].dt_txt;
        var temp1 = document.querySelector('._5Temps5');
        temp1.innerText = dataParsed.list[35].main.temp + '°C';

        }
    }
}



