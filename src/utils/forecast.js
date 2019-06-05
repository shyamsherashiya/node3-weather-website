const request = require('request') 

const forecast = (lati,long,callback) =>{
    const url = 'https://api.darksky.net/forecast/3ab1020f3cebedae0f863a58b6f418dc/'+lati+','+long+ '?units=si' 
    request({url:url,json:true},(error,{body}) =>{
    if(error)
    {
        callback('Unable to connect to Forcast service!',undefined)
    }
    else if(body.error)
    {
        callback('Unable to find location.',undefined) 
    }
    else{
        console.log(body.daily.data[0])
        callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out.The high today is '+body.daily.data[0].temperatureHigh +' and with a low of '+ body.daily.data[0].temperatureLow + ' .There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
    })
}

module.exports = forecast
