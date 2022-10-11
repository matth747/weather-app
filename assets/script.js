

    $(".btn-primary").click(function(){
        
        var APIKey = "&appid=cba8af4433e354992fc4db0cecdab63f"
        var cityInput= $("#textBox").val();
        var APIUrl =  "https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + APIKey;
        
        fetch(APIUrl) 

            .then(function (response) {
                return response.json();
            
        })
            .then(function (data) {
                
                var lat = data[0].lat;
                var lon = data[0].lon;
            
                var cordUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + APIKey
                
                fetch(cordUrl)
        
                .then(function (response) {
                    return response.json();
                })
        
                .then(function (cordData) {
                    console.log(cordData)
                    var cels = cordData.list[0].main.temp - 273.15;
                    var fahr = cels * 9 / 5 + 32;
                    var humidity = cordData.list[0].main.humidity
                    var windSpeed = cordData.list[0].wind.speed * 2.23694
                    var icon = cordData.list[0].weather[0].icon
                    var windSpeed = windSpeed.toFixed(2)
                    var fahr = fahr.toFixed(2)

                    var today = moment()
                    var toDate1 = moment().add(1, 'days')
                    var toDate2 = moment().add(2, 'days')
                    var toDate3 = moment().add(3, 'days')
                    var toDate4 = moment().add(4, 'days')
                    var toDate5 = moment().add(5, 'days')
                    
                    
                    $("#today").append("<li>" + "todays weather for: " + cityInput + " on " + today.format("MM-DD-YY") + "</li>")
                    $("#today").append("<img src=" + "'https://openweathermap.org/img/wn/" + icon + "@2x.png'" + "/>")
                    $("#today").append("<li>" + "temp: " + fahr + " °F" + "</li>")
                    $("#today").append("<li>" + "wind: " + windSpeed + " mph" + "</li>")
                    $("#today").append("<li>" + "humidity: "+ humidity + " %" + "</li>")

                    var cels1 = cordData.list[7].main.temp - 273.15;
                    var fahr1 = cels1 * 9 / 5 + 32;
                    var humidity1 = cordData.list[7].main.humidity
                    var windSpeed1 = cordData.list[7].wind.speed * 2.23694
                    var icon1 = cordData.list[7].weather[0].icon
                    var windSpeed1 = windSpeed1.toFixed(2)
                    var fahr1 = fahr1.toFixed(2)

                    $("#today1").append("<li>" + toDate1.format("MM-DD-YY") + "</li>")
                    $("#today1").append("<img src=" + "'https://openweathermap.org/img/wn/" + icon1 + "@2x.png'" + "/>")
                    $("#today1").append("<li>" + "temp: " + fahr1 + " °F" + "</li>")
                    $("#today1").append("<li>" + "wind: " + windSpeed1 + " mph" + "</li>")
                    $("#today1").append("<li>" + "humidity: "+ humidity1 + " %" + "</li>")

                    var cels2 = cordData.list[15].main.temp - 273.15;
                    var fahr2 = cels2 * 9 / 5 + 32;
                    var humidity2 = cordData.list[15].main.humidity
                    var windSpeed2 = cordData.list[15].wind.speed * 2.23694
                    var icon2 = cordData.list[15].weather[0].icon
                    var windSpeed2 = windSpeed2.toFixed(2)
                    var fahr2 = fahr2.toFixed(2)

                    $("#today2").append("<li>" + toDate2.format("MM-DD-YY") + "</li>")
                    $("#today2").append("<img src=" + "'https://openweathermap.org/img/wn/" + icon2 + "@2x.png'" + "/>")
                    $("#today2").append("<li>" + "temp: " + fahr2 + " °F" + "</li>")
                    $("#today2").append("<li>" + "wind: " + windSpeed2 + " mph" + "</li>")
                    $("#today2").append("<li>" + "humidity: "+ humidity2 + " %" + "</li>")

                    var cels3 = cordData.list[23].main.temp - 273.15;
                    var fahr3 = cels3 * 9 / 5 + 32;
                    var humidity3 = cordData.list[23].main.humidity
                    var windSpeed3 = cordData.list[23].wind.speed * 2.23694
                    var icon3 = cordData.list[23].weather[0].icon
                    var windSpeed3 = windSpeed3.toFixed(2)
                    var fahr3 = fahr3.toFixed(2)

                    $("#today3").append("<li>" + toDate3.format("MM-DD-YY") + "</li>")
                    $("#today3").append("<img src=" + "'https://openweathermap.org/img/wn/" + icon3 + "@2x.png'" + "/>")
                    $("#today3").append("<li>" + "temp: " + fahr3 + " °F" + "</li>")
                    $("#today3").append("<li>" + "wind: " + windSpeed3 + " mph" + "</li>")
                    $("#today3").append("<li>" + "humidity: "+ humidity3 + " %" + "</li>")

                    var cels4 = cordData.list[31].main.temp - 273.15;
                    var fahr4 = cels4 * 9 / 5 + 32;
                    var humidity4 = cordData.list[31].main.humidity
                    var windSpeed4 = cordData.list[31].wind.speed * 2.23694
                    var icon4 = cordData.list[31].weather[0].icon
                    var windSpeed4 = windSpeed4.toFixed(2)
                    var fahr4 = fahr4.toFixed(2)

                    $("#today4").append("<li>" + toDate4.format("MM-DD-YY") + "</li>")
                    $("#today4").append("<img src=" + "'https://openweathermap.org/img/wn/" + icon4 + "@2x.png'" + "/>")
                    $("#today4").append("<li>" + "temp: " + fahr4 + " °F" + "</li>")
                    $("#today4").append("<li>" + "wind: " + windSpeed4 + " mph" + "</li>")
                    $("#today4").append("<li>" + "humidity: "+ humidity4 + " %" + "</li>")

                    var cels5 = cordData.list[39].main.temp - 273.15;
                    var fahr5 = cels5 * 9 / 5 + 32;
                    var humidity5 = cordData.list[39].main.humidity
                    var windSpeed5 = cordData.list[39].wind.speed * 2.23694
                    var icon5 = cordData.list[39].weather[0].icon
                    var windSpeed5 = windSpeed5.toFixed(2)
                    var fahr5 = fahr5.toFixed(2)

                    $("#today5").append("<li>" + toDate5.format("MM-DD-YY") + "</li>")
                    $("#today5").append("<img src=" + "'https://openweathermap.org/img/wn/" + icon5 + "@2x.png'" + "/>")
                    $("#today5").append("<li>" + "temp: " + fahr5 + " °F" + "</li>")
                    $("#today5").append("<li>" + "wind: " + windSpeed5 + " mph" + "</li>")
                    $("#today5").append("<li>" + "humidity: "+ humidity5 + " %" + "</li>")

                })
        
        
               $("#textBox").val("");

            })
    
    });
    
   
   