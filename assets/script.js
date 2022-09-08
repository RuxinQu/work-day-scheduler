/* Description: This script.js file gets the current date, weekday and hour of today. The current date and weekday is shown on the top of the
page. If the hour on the scheduler is past, the background  of the input area will be gray. If it's the current hour, the background will be red. If the hour on
the scheduler is in the future, the background will be green*/ 

$(document).ready(() => {
    const DateTime = luxon.DateTime;
    const { Info } = luxon;
    let today = DateTime.now();

    // get the weekday of today and the date 
    function renderDate() {
        let weekNum = today.weekday;
        $('#currentDay').text(`${Info.weekdays('long')[weekNum-1]},  ${today.toFormat('MMM dd, yyyy')}`)
    }

    // run a .each on each textarea input and compare the currentHour with the id attribute inside textarea
    function getCurrentHour() {
        let currentHour = today.hour;

        $('textarea').each(function () {
            let displayTime = parseInt($(this).attr('id'))
            if (currentHour > displayTime) {
                $(this).addClass('past')
            } else if (currentHour == displayTime) {
                $(this).addClass('current')
            } else {
                $(this).addClass('future')
            }
        })
    }

    renderDate();
    getCurrentHour();
})
