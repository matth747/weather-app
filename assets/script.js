

    $(".btn").click(function(){
        
        var APIUrl =  "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + APIKey;

        var APIKey = "&appid=cba8af4433e354992fc4db0cecdab63f"
        var cityInput= $("#whatsInTheBox").val();
        
        fetch(APIUrl)
            .then(function (response) {
                return response.json();
        })
            .then(function (data) {
            console.log(data)
    });


       $("#whatsInTheBox").val("");
    });
    



 
