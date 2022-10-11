

    $(".btn-primary").click(function(){
        
        var APIKey = "&appid=cba8af4433e354992fc4db0cecdab63f"
        var cityInput= $("#textBox").val();
        var APIUrl =  "https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + APIKey;
        
        fetch(APIUrl) 

            .then(function (response) {
                return response.json();
            
        })
            .then(function (data) {
                console.log(data)
                var lat = data[0].lat;
                var lon = data[0].lon;
                console.log(lat)
                console.log(lon)
        
                var cordUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + APIKey

        
                console.log(cordUrl)
                fetch(cordUrl)
        
                .then(function (response) {
                    return response.json();
                })
        
                .then(function (cordData) {
                    console.log(cordData)
                })
        
        
               $("#textBox").val("");

            })
    
    });
    
   
   