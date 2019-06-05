const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const meassageOne = document.querySelector('#message-1')
const meassageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    // console.log(location)

    meassageOne.textContent = 'Loading...'
    meassageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            meassageOne.textContent = data.error
        }
        else{
            meassageOne.textContent = data.location
            meassageTwo.textContent = data.forecast 
            // console.log(data.location)
            // console.log(data.forecast)
        }
    })
})
})