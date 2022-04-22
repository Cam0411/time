const times = document.querySelector('.setTime')
const days = document.querySelector('.day')
function renderTime(){
    const date = new Date()
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    times.innerHTML = `${hour}:${min}:${sec}`
   
}
function day(){
    const today = new Date()
    days.innerHTML = buildDate(today)
    function buildDate(dates){
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        const d = days[dates.getDay()]
        const date2 = dates.getDate()
        const month = months[dates.getMonth()]
        const year = dates.getFullYear()

       return `${d} ${date2} ${month} ${year}`
    }
}
day()
setInterval(renderTime,1000)