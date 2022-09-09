/* Description: This userinput.js file handles the user input and local storage */
$(document).ready(() => {

    const saveToDo = (event) => {
        event.preventDefault();
        const toDo = $(event.currentTarget).siblings('textarea').val()
        const toDoTime = $(event.currentTarget).siblings('.hour').text()
        localStorage.setItem(toDoTime, JSON.stringify(toDo));
    }

    const renderToDo = () => {
        $('.hour').each(function () {
            const textToRender = JSON.parse(localStorage.getItem($(this).text()));
            $(this).siblings('textarea').val(textToRender);
        })
    }

    $('.btn').on('click', saveToDo)
    renderToDo();
})