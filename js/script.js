var request = new XMLHttpRequest();
var d = new Date();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var n = month[d.getMonth()];
document.querySelector('.date').innerHTML = d.getDate() + ' ' + n +', '+ d.getFullYear();

let setKey = (key) =>{
    if (key.keyCode == 13){
        getResults(searchbox.value);
    }
};
let searchbox = document.querySelector('.search-box');
searchbox.addEventListener("keypress", setKey);
// function setKey(key){
//     if (key.keyCode == 13){
//         getResults(searchbox.value);
//         console.log(searchbox.value);
//     }
// }
    document.querySelector('.button').onclick = function showResult() {
        getResults(searchbox.value);
    };


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
        var miniStatus1800 = document.querySelector('.miniStatus1800');
        miniStatus1800.innerText = dataParsed.list[1].weather[0].main;
        var status1800 = document.querySelector('._1800img');
        var statusImg1800 = dataParsed.list[1].weather[0].icon;
        var iconURL1800 = 'https://openweathermap.org/img/wn/' + statusImg1800 + '.png';
        status1800.setAttribute('src', iconURL1800);
        var fTemp1800 = document.querySelector('.fTemp1800');
        fTemp1800.innerText = dataParsed.list[1].main.temp + '°C';

        //21:00:00
        var hour2100 = document.querySelector('._2100');
        hour2100.innerText = dataParsed.list[2].dt_txt;
        var miniStatus2100 = document.querySelector('.miniStatus2100');
        miniStatus2100.innerText = dataParsed.list[2].weather[0].main;
        var status2100 = document.querySelector('._2100img');
        var statusImg2100 = dataParsed.list[2].weather[0].icon;
        var iconURL2100 = 'https://openweathermap.org/img/wn/' + statusImg2100 + '.png';
        status2100.setAttribute('src', iconURL2100);
        var fTemp2100 = document.querySelector('.fTemp2100');
        fTemp2100.innerText = dataParsed.list[2].main.temp + '°C';

        //00:00:00
        var hour0000 = document.querySelector('._0000');
        hour0000.innerText = dataParsed.list[3].dt_txt;
        var miniStatus0000 = document.querySelector('.miniStatus0000');
        miniStatus0000.innerText = dataParsed.list[3].weather[0].main;
        var status0000 = document.querySelector('._0000img');
        var statusImg0000 = dataParsed.list[3].weather[0].icon;
        var iconURL0000 = 'https://openweathermap.org/img/wn/' + statusImg0000 + '.png';
        status0000.setAttribute('src', iconURL0000);
        var fTemp0000 = document.querySelector('.fTemp0000');
        fTemp0000.innerText = dataParsed.list[3].main.temp + '°C';

        //03:00:00
        var hour0300 = document.querySelector('._0300');
        hour0300.innerText = dataParsed.list[4].dt_txt;
        var miniStatus0300 = document.querySelector('.miniStatus0300');
        miniStatus0300.innerText = dataParsed.list[4].weather[0].main;
        var status0300 = document.querySelector('._0300img');
        var statusImg0300 = dataParsed.list[4].weather[0].icon;
        var iconURL0300 = 'https://openweathermap.org/img/wn/' + statusImg0300 + '.png';
        status0300.setAttribute('src', iconURL0300);
        var fTemp0300 = document.querySelector('.fTemp0300');
        fTemp0300.innerText = dataParsed.list[4].main.temp + '°C';

        //06:00:00
        var hour0600 = document.querySelector('._0600');
        hour0600.innerText = dataParsed.list[5].dt_txt;
        var miniStatus0600 = document.querySelector('.miniStatus0600');
        miniStatus0600.innerText = dataParsed.list[5].weather[0].main;
        var status0600 = document.querySelector('._0600img');
        var statusImg0600 = dataParsed.list[5].weather[0].icon;
        var iconURL0600 = 'https://openweathermap.org/img/wn/' + statusImg0600 + '.png';
        status0600.setAttribute('src', iconURL0600);
        var fTemp0600 = document.querySelector('.fTemp0600');
        fTemp0600.innerText = dataParsed.list[5].main.temp + '°C';

        //09:00:00
        var hour0900 = document.querySelector('._0900');
        hour0900.innerText = dataParsed.list[6].dt_txt;
        var miniStatus0900 = document.querySelector('.miniStatus0900');
        miniStatus0900.innerText = dataParsed.list[6].weather[0].main;
        var status0900 = document.querySelector('._0900img');
        var statusImg0900 = dataParsed.list[6].weather[0].icon;
        var iconURL0900 = 'https://openweathermap.org/img/wn/' + statusImg0900 + '.png';
        status0900.setAttribute('src', iconURL0900);
        var fTemp0900 = document.querySelector('.fTemp0900');
        fTemp0900.innerText = dataParsed.list[6].main.temp + '°C';
        
        //12:00:00
        var hour1200 = document.querySelector('._1200');
        hour1200.innerText = dataParsed.list[7].dt_txt;
        var miniStatus1200 = document.querySelector('.miniStatus1200');
        miniStatus1200.innerText = dataParsed.list[7].weather[0].main;
        var status1200 = document.querySelector('._1200img');
        var statusImg1200 = dataParsed.list[7].weather[0].icon;
        var iconURL1200 = 'https://openweathermap.org/img/wn/' + statusImg1200 + '.png';
        status1200.setAttribute('src', iconURL1200);
        var fTemp1200 = document.querySelector('.fTemp1200');
        fTemp1200.innerText = dataParsed.list[7].main.temp + '°C';

        //15:00:00
        var hour1500 = document.querySelector('._1500');
        hour1500.innerText = dataParsed.list[8].dt_txt;
        var miniStatus1500 = document.querySelector('.miniStatus1500');
        miniStatus1500.innerText = dataParsed.list[8].weather[0].main;
        var status1500 = document.querySelector('._1500img');
        var statusImg1500 = dataParsed.list[8].weather[0].icon;
        var iconURL1500 = 'https://openweathermap.org/img/wn/' + statusImg1500 + '.png';
        status1500.setAttribute('src', iconURL1500);
        var fTemp1500 = document.querySelector('.fTemp1500');
        fTemp1500.innerText = dataParsed.list[8].main.temp + '°C';



        //Forecast weather in the next 5 days
        //Day-1
        var day1 = document.querySelector('._5Days1');
        day1.innerText = dataParsed.list[1].dt_txt;
        var temp1 = document.querySelector('._5Temps1');
        temp1.innerText = dataParsed.list[1].main.temp + '°C';

        //Day-2
        var day2 = document.querySelector('._5Days2');
        day2.innerText = dataParsed.list[9].dt_txt;
        var temp2 = document.querySelector('._5Temps2');
        temp2.innerText = dataParsed.list[9].main.temp + '°C';

        //Day-3
        var day3 = document.querySelector('._5Days3');
        day3.innerText = dataParsed.list[17].dt_txt;
        var temp3 = document.querySelector('._5Temps3');
        temp3.innerText = dataParsed.list[17].main.temp + '°C';

        //Day-4
        var day4 = document.querySelector('._5Days4');
        day4.innerText = dataParsed.list[25].dt_txt;
        var temp4 = document.querySelector('._5Temps4');
        temp4.innerText = dataParsed.list[25].main.temp + '°C';

        //Day-5
        var day5 = document.querySelector('._5Days5');
        day5.innerText = dataParsed.list[33].dt_txt;
        var temp5 = document.querySelector('._5Temps5');
        temp5.innerText = dataParsed.list[33].main.temp + '°C';

        };
    };
}



