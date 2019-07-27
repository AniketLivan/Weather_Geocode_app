const request = require('request');


var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c6530981f71fb55f7e16130d97d673f3/${lat},${lng}`,
        json: true
    },(error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else{
        console.log('Unable to connect to the Forecast servers');
        }
        
    });
}
module.exports.getWeather = getWeather;