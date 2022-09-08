const DateTime = luxon.DateTime;
const { Info } = luxon;
let today = DateTime.now();


const renderDate = () => {  
    let weekNum = today.weekday;
    $('#currentDay').text(`${Info.weekdays('long')[weekNum]},  ${today.toFormat('MMM dd, yyyy')}`)
}

const getCurrentHour = () => {
    let currentHour = today.hour
    if(currentHour > 12){
        currentHour -= 12;
        
    }





}
renderDate();
console.log(getCurrentHour())
