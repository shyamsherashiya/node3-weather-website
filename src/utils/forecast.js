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
        callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
    })
}

module.exports = forecast
